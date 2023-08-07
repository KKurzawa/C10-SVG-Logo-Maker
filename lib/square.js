class Square {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
    render() {
        return `<svg version="1.1" width="400" height="400" xmlns="http://www.w3.org/2000/svg">

        <rect width="400" height="400" style="fill:${this.color}" />

        <text x="200" y="250" font-size="150" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
      </svg>`
    }
}

module.exports = { Square };

