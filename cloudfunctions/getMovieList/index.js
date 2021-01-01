// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
    // 云函数入口函数
exports.main = async(event, context) => {
    const start = event.start
    return db.collection('movielist').skip(start).limit(20).get()
}