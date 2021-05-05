function* makePoints(options) {
    let point = { x: 0, y: 0 };

    for (let i = 0; i < 10000; ++i) {
        const r = Math.floor(Math.random() * 1000);
        const func = options.functions.find(a => r <= a.p);

        point = {
            x: func.a * point.x + func.b * point.y + func.e,
            y: func.c * point.x + func.d * point.y + func.f
        }

        yield { x: point.x * 60 + 225, y: options.height - point.y * 60 };
    }
}

export default function fernDrawer(canvas, options) {
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, options.width, options.height);
    for (let point of makePoints(options))
        context.fillRect(point.x, point.y, 1, 1);
}
