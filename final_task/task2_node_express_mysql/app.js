const _express = require('express')
const app = _express()
const bodyParser = require('body-parser')
const path = require('path')
const _mysql = require('mysql')

/**
 * @param portId: 后端服务器运行端口号，默认为 3000
 * @param host:　服务器 URL，默认为 localhost
 * @param port: 数据库连接端口号，默认为 3306
 * @param user: 数据库用户名，默认为 root
 * @param password: 数据库用户密码，默认为 132546
 * @param database: 连接的数据库名，默认为 task2
 * @param verified: 当前用户是否经过验证，默认为 false，当用户输入的数据库信息有效时为 true，若为 false则不能进行用户接口的访问
 * @param pool: 数据库连接对象
 */
var portId = 3000
var host = 'localhost'
var port = '3306'
var user = 'root'
var password = '132546'
var database = 'task2'
var verified = false
var connection

app.engine('art', require('express-art-template'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/config', (req, res) => {
    res.render('config')
})

app.post('/setConfig', (req, res) => {
    // console.log(req.body)
    let configs = req.body
    host = configs.host
    port = configs.port
    user = configs.user
    password = configs.password
    database = configs.database
    connection = _mysql.createConnection({
        host,
        port,
        user,
        password,
        database
    })
    connection.connect((err) => {
        if (err) {
            console.log("error: " + err)
            res.status(500).send(err)
            verified = false
        } else {
            console.log("success to build connection")
            res.status(200).send({ msg: 'success' })
            verified = true
        }
    })
})

app.use('/add', (req, res, next) => {
    if (verified === true) {
        next()
    } else {
        res.render('config')
    }
})

app.get('/add', (req, res) => {
    res.render('add')
})

app.post('/add', (req, res) => {
    let stu = req.body
    let sql = 'INSERT INTO students(name, age, sex, clazz) VALUES(?, ?, ?, ?)'
    let params = [stu.name, stu.age, stu.sex, stu.clazz]
    connection.query(sql, params, (err, result) => {
        if (err) {
            console.log('插入记录失败: ' + err)
            res.status(500).send({ msg: 'failed to insert data' })
        } else {
            console.log(result)
            res.status(200).send({ msg: 'success' })
        }
    })
})

app.use('/update', (req, res, next) => {
    if (verified === true) {
        next()
    } else {
        res.render('config')
    }
})

app.get('/update', (req, res) => {
    res.render('update')
})

app.post('/update', (req, res) => {
    let stu = req.body
    let sql = 'UPDATE students SET name=?, age=?, sex=?, clazz=? WHERE id=?'
    let params = [stu.name, stu.age, stu.sex, stu.clazz, stu.id]
    connection.query(sql, params, (err, result) => {
        if (err) {
            console.log('更新记录失败: ' + err)
            res.status(500).send({ msg: 'failed to update data' })
        } else {
            console.log(result)
            res.status(200).send({ msg: 'success' })
        }
    })
})

app.use('/query', (req, res, next) => {
    if (verified === true) {
        next()
    } else {
        res.render('config')
    }
})

app.get('/query', (req, res) => {
    res.render('query')
})

app.post('/query', (req, res) => {
    let id = req.body.id
    let sql = 'SELECT * FROM students WHERE id=?'
    let params = [id]
    connection.query(sql, params, (err, result) => {
        if (err) {
            console.log('查询记录失败: ' + err)
            res.status(500).send({ msg: 'failed to query data' })
        } else if(result.length === 0) {
            res.status(500).send({ msg: 'no matched result' })
        } else {
            console.log(result)
            res.status(200).send({
                id: result[0].id,
                name: result[0].name,
                age: result[0].age,
                sex: result[0].sex,
                clazz: result[0].clazz
            })
        }
    })
})

app.use('/delete', (req, res, next) => {
    if (verified === true) {
        next()
    } else {
        res.render('config')
    }
})

app.get('/delete', (req, res) => {
    res.render('delete')
})

app.post('/delete', (req, res) => {
    let id = req.body.id
    let sql = 'DELETE FROM students WHERE id=?'
    let params = [id]
    connection.query(sql, params, (err, result) => {
        if (err) {
            console.log('删除记录失败: ' + err)
            res.status(500).send({ msg: 'failed to update data' })
        } else {
            console.log(result)
            if (result.affectedRows === 0) {
                res.status(500).send({ msg: 'no matched result!' })
            } else {
                res.status(200).send({ msg: 'success' })
            }
        }
    })
})

app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(portId, () => {
    console.log('服务已启动，端口号: ' + portId + '\nhttp://localhost:3000/')
})
