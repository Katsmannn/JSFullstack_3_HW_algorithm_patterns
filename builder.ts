interface Builder {
    setBorderWigth(wigth: number): this;
    setBorderColor(color: string): this;
    setFillColor(color: string): this;
    setFillGradient(gradient: number): this;
}

class Shape {
    private corners: number;
    private borderWigth?: number;
    private borderColor?: string;
    private fillColor: string;
    private fillGradient?: number;

    public setCorners(corners: number): void {
        this.corners = corners;
    }

    public setBorderWigth(wigth: number): void {
        this.borderWigth = wigth;
    }

    public setBorderColor(color: string): void {
        this.borderColor = color;
    }

    public setFillColor(color: string): void {
        this.fillColor = color;
    }

    public setFillGradient(gradient: number): void {
        this.fillGradient = gradient;
    }
}

class Triangle extends Shape {
    constructor() {
        super();
        this.setCorners(3);
    }
}

class Square extends Shape {
    constructor() {
        super();
        this.setCorners(4);
    }
}

class TriangleBuilder implements Builder {
    private triangle: Triangle;

    costructor() {
        this.triangle = new Triangle();
    }

    public setBorderWigth(wigth: number): this {
        this.triangle.setBorderWigth(wigth);
        return this;
    }

    public setBorderColor(color: string): this {
        this.triangle.setBorderColor(color);
        return this;
    }

    public setFillColor(color: string): this {
        this.triangle.setFillColor(color);
        return this;
    }

    public setFillGradient(gradient: number): this {
        this.triangle.setFillGradient(gradient);
        return this;
    }

    public create(): Triangle {
        return this.triangle;
    }
}

class SquareBuilder implements Builder {
    private square: Square;

    costructor() {
        this.square = new Square();
    }

    public setBorderWigth(wigth: number): this {
        this.square.setBorderWigth(wigth);
        return this;
    }

    public setBorderColor(color: string): this {
        this.square.setBorderColor(color);
        return this;
    }

    public setFillColor(color: string): this {
        this.square.setFillColor(color);
        return this;
    }

    public setFillGradient(gradient: number): this {
        this.square.setFillGradient(gradient);
        return this;
    }

    public create(): Square {
        return this.square;
    }
}

class Director {
    public BuildRedBorderedTriangle(): Triangle {
        return new TriangleBuilder()
            .setFillColor('red')
            .setBorderWigth(1)
            .setBorderColor('black')
            .create()
    }

    public BuildBlackUnborderedSquare(): Square {
        return new SquareBuilder()
            .setFillColor('black')
            .create()
    }
}

const someTriangle = new TriangleBuilder()
    .setBorderColor('black')
    .setBorderWigth(2)
    .setFillColor('blue')
    .setFillGradient(2)
    .create();

const director = new Director();
director.BuildBlackUnborderedSquare();
director.BuildRedBorderedTriangle;
