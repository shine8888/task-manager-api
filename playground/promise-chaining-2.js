require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5c1a63e8f0d4c50656c5ab28').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const deleteAndCount = async(id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteAndCount('5fdb85693f373b05d0629ff8').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})