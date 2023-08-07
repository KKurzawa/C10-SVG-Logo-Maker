class Triangle {
    constructor(text, color, textColor) {
        this.text = text,
            this.color = color,
            this.textColor = textColor
    }
    render() {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">

        <polygon points="250,60 100,400 400,400" style="fill:${this.color}" />

        <text x="250" y="300" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        
        </svg>`}
}

module.exports = { Triangle };