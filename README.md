# Strong Password Generator
Generate random passwords between 8 - 12 characters.

A simple means of generating random passwords of any length the user provides (current default set to btwn [8-12]). Includes 1 capital letter, numbers, special characters, and it will never be a dictionary word.

While many browsers have this functionality built in, I've experienced times when, for one reason or another, the auto suggestion never happens. So I created my own program that generates unique passwords on the fly.

Typically, if I'm running this program in the terminal, I'll add a `for` loop to generate a large number of passwords and then pick from this list:

```
// Log ten 10-character passwords to the console.

for (let i = 0; i < 10; i++) {
  console.log(`${i + 1}: ${generateStrongPassword(10)}\n`);
}

// 1: F&d@9)1$6^
//
// 2: 6-8$6)B)c&
//
// 3: F*f?0)d!2-
//
// 4: D+7(3(a-2%
//
// 5: A@4-b)c*6^
//
// 6: 6*2*A$5$0*
//
// 7: 8%2-D)6%3%
//
// 8: C8%1#7!5^9
// 
// 9: C-1*1#4-9&
//
// 10: 5-1*3#1%F#
```
