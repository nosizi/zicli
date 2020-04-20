const inquirer = require('inquirer')
const path = require('path')
const fs = require('fs-extra')

async function create(appName) {
  const targetDir = path.join(process.cwd(), appName)

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'template',
        message: '选择模板进行创建',
        choices: ['react', 'vue']
      }
    ])
    .then(answers => {
      if (fs.existsSync(targetDir)) fs.removeSync(targetDir)

      fs.mkdirp(targetDir)
      
      console.log(`${answers.template}项目已创建在${targetDir}中`)
      
    })
}

module.exports = create
