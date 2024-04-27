export class DeepSet extends Set {
    add(element) {
        for (let item of this) {
            if (this.deepCompare(element, item)) {
                return this; // if element exist on object do not add it
            }
        }
        super.add.call(this, element);
        return this;
    }

    deepCompare(element, item) {
        return JSON.stringify(element) === JSON.stringify(item)
    }
}
