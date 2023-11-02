const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  let name = answer;
  rl.question("What's an activity you like doing? ", (answer) => {
    let activity = answer;
    rl.question("What do you listen to while doing that? ", (answer) => {
      let sound = answer;
      rl.question("When is your birthday? ", (answer) => {
        let birthday = answer;
        rl.question("What's your favourite food? ", (answer) => {
          let food = answer;
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            let sport = answer;
            rl.question("What is your superpower? ", (answer) => {
              let power = answer;
              console.log(`Hello there! My name is ${name}. My birthday is ${birthday}. I like to ${activity}, while I listen to ${sound}. I love to eat ${food}, play ${sport} and my superpower is ${power}!`);
            rl.close();
            });
          });
        });
      });
    });
  });          
});