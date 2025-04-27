const request = require("supertest");
const app = require("./app");
const mysql = require('mysql2/promise');  // 使用 promise 版本的 mysql2

// 创建连接池
const pool = mysql.createPool({
  host: 'localhost',
  user: 'test_user',
  password: 'test_password',
  database: 'test_database',  // 测试用的数据库
});

let connection;

beforeAll(async () => {
  // 获取连接并开始事务
  connection = await pool.getConnection();
  await connection.beginTransaction();  // 启动事务
});

afterEach(async () => {
  // 每个测试后回滚事务，确保数据库状态不会被改变
  await connection.rollback();  // 回滚事务
});

afterAll(async () => {
  // 关闭连接池
  connection.release();
  await pool.end();
});


describe("todos test", () => {
  it("GET /todos --> array todos", () => {
    return request(app)
      .get("/todos")
      .expect("Content-Type", /json/i)
      .expect(200)
      .then(r => {
        expect(r.body)
          .toEqual(
            expect.arrayContaining([
              expect.objectContaining({
                name: expect.any(String),
                completed: expect.any(Boolean)
              })
            ])
          )
      })
  })

  it("GET /todos/id --> specific todos", () => {
    return request(app)
      .get("/todos/1")
      .expect("Content-Type", /json/i)
      .expect(200)
      .then(r => {
        expect(r.body)
          .toEqual(expect.objectContaining({
            name: expect.any(String),
            completed: expect.any(Boolean)
          }));
      })
  })

  it("GET /todos/id --> 404 not found", () => {
    return request(app)
      .get("/todos/9999090")
      .expect(404);
  })

  it("POST /todos/add --> create todo", () => {
    return request(app)
      .post("/todos/add")
      .send({ name: "dish wash" })
      .expect("Content-Type", /json/i)
      .expect(201)
      .then(r => {
        expect(r.body)
          .toEqual(expect.objectContaining({
            name: "dish wash",
            completed: false
          }))
      })
  })

  it("GET /todos -- Validates request body", () => {
    return request(app).post("/todos/add").body({ name: 123 }).expect(422);
  })
});