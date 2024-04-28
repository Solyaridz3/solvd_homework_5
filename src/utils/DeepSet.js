/**
 * DeepSet
 *
 * Custom Set implementation to store the unique elements, that works even if elements has
 * different reference. Basically to store unique objects too, not only primitive types.
 *
 * Methods:
 * - `add(element)`: Adds an element to the set if it doesn't already exist based on a deep comparison.
 * - `deepCompare(element, item)`: Compares two elements deeply by converting them to JSON string and checking for equality.
 */
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
