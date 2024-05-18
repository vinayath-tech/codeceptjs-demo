const OpenAI = require('openai');
const Groq = require('groq-sdk');

const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();


require('./heal');

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.saucedemo.com',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  ai: {
    request: async(messages) => {
      const chatCompletion = await groq.chat.completions.create({
        messages,
        model: "mixtral-8X7b-32768"
      });
      return chatCompletion.choices[0]?.message?.content || "";
    }

    // request: async(messages) => {
    //   const completion = await openai.chat.completions.create({
    //     model: 'gpt-3.5-turbo-0125',
    //     messages
    //   });
    //   return completion?.choices[0]?.message?.content;
    // }
  },
  plugins: {
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        User:{
          login: async(I) => {
            I.amOnPage('/');
            I.seeElement(this.fields.username);
            I.fillField(this.fields.username, 'standard_user');
            I.fillField(this.fields.password, 'secret_sauce');
            I.click(this.fields.login);
          },
          check: async(I) => {
            I.seeElement(this.fields.cartContainer);
          }
        }
      }
    },
    heal: {
      enabled: true
    }
  },
  name: 'codeceptjs-playwright'
}