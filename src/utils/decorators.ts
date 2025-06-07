export const Data = () => <T extends { new(...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
        [key: string]: any;
        [key: symbol]: any;

        constructor(...args: any[]) {
            super(...args);
            const props = Reflect.ownKeys(this);

            props.forEach((prop: string | symbol) => {
                if ((prop as string).startsWith('_')) {

                    const property = (prop.toString()).slice(1);

                    Object.defineProperty(this, property, {
                        get: () => this[prop],
                        set: (value: any) => { this[prop] = value; },
                        enumerable: true,
                        configurable: true
                    });
                }
            });
        }
    }
}
