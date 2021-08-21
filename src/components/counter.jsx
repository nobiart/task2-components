import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const tags = ['tag1', 'tag2', 'tag3'];
    const formCount = () => {
        return count === 0 ? 'Ноль' : count;
    }
    const getBadgeClasses = () => {
        let classes = 'badge m-2 bg-';
        classes += count === 0 ? 'danger' : 'primary';
        return classes;
    }
    const renderTags = () => {
        if (tags.length === 0) return 'Тегов не найдено';
        return tags.map((tag) => <li key={tag}>{tag}</li>);
    }
    const handleIncrement = (productId) => {
        console.log(productId);
        setCount(count + 1);
    }
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
            console.log('count', count);
        }
    }
    return (
        <>
            {tags.length === 0 && 'Теги не найдены'}
            { renderTags() }
            <span className={getBadgeClasses()}>{formCount()}</span>
            <button onClick={() => handleIncrement({ id: 1 })} className="btn btn-secondary btn-sm">
                Increment
            </button>
            <button onClick={handleDecrement} className="btn btn-secondary btn-sm ms-1">
                Decrement
            </button>
        </>
    );
}

export default Counter;