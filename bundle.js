/**
 * This file will be evaluated by browser.
 */

console.log('hello, world')

const buttonElement = document.getElementById('button')

if (buttonElement) {
  buttonElement.onclick = async () => {
    /**
     * In this line we asynchronously import module.js file.
     */
    const { hello } = await import('./modules.js')
    console.log(hello)
  }
}
