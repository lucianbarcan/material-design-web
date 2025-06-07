declare namespace JSX {
    interface IntrinsicElements {
        'my-demo': {
            name: string; // Required attribute (no ? modifier)
            [key: string]: any;
        }
    }
}