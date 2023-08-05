function renderShapes(data) {
    let shapeType = `${data.shape}`;
    let yourShape = "";
    if (shapeType === 'Circle') {
        yourShape = [cx = "25", cy = "75", r = "20"];
    }
    return yourShape
}

function renderSvg(data) {
    return renderShapes(data);
}
module.exports = renderSvg;