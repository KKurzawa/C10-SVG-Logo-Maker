class Circle {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        <circle cx="150" cy="100" r="80" style="fill:${this.color}" />

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
      </svg>`
    }
}

module.exports = { Circle };

// class Triangle {
//     constructor(text, color, textColor) {
//         this.text = text,
//             this.color = color,
//             this.textColor = textColor
//     }
//     render() {
//         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

//         <polygon points="200,10 250,190 160,210" style="fill:${this.color}" />

//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
//       </svg>`