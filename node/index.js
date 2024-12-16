const prompts = require(`prompts`)

const main = async () => {

  const responses = await prompts([
    {
      type: `text`,
      name: `name`,
      message: `Whats your name?`,
    },
    {
      type: `text`,
      name: `name`,
      message: `Whats your name?`,
    },
    {
      type: `text`,
      name: `name`,
      message: `Whats your name?`,
    },
    {
      type: `text`,
      name: `name`,
      message: `Whats your name?`,
    },
  ])
  console.log(responses)
};
main();