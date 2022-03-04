import React, { useState, useRef, useEffect } from 'react';
import styles from './board.module.css';
import BoardItem from '../board_item/BoardItem';

const ITEM_STYLES = {
	position: 'absolute',
	left: '100px',
	top: '100px',
	width: '100px',
	height: '100px',
	border: '1px solid white',
	zIndex: 1,
};

const itemInfo = {
	1: {
		id: '1',
		styles: ITEM_STYLES,
	},
};

const Board = () => {
	const [items, setItems] = useState(false);
	const boardRef = useRef();
  let boardLeft = null;
  let boardTop = null;
  
  useEffect(() => {
    const boardDom = boardRef.current;
    console.log(boardDom);
    boardLeft = boardDom.offsetLeft;
    boardTop = boardDom.offsetTop;
  });

	let dragMode = false;
	const addItem = () => {
		const newItemId = Date.now();
		const newItems = { ...items };
		const newItem = {
			id: newItemId,
			style: {
				...ITEM_STYLES,
			},
		};

		newItems[newItemId] = newItem;
		setItems(newItems);
	};

	const onBoardMouseDown = (e) => {
		const targetId = e.target.dataset.id;
    console.log(boardLeft, boardTop); 
		if (!targetId) return;
		else {
			dragMode = true;
		}
	};

	const onBoardMouseMove = (e) => {
		if (!dragMode) return;
		console.log(e.pageX, e.pageY);
	};

	const onBoardMouseUp = (e) => {
		dragMode = false;
	};
	return (
		<div className={styles.main}>
			<div
				onMouseMove={onBoardMouseMove}
				onMouseDown={onBoardMouseDown}
				onMouseUp={onBoardMouseUp}
				className={styles.board}
				ref={boardRef}
			>
				{items
					? Object.keys(items).map((key) => (
							<BoardItem key={items[key].id} {...items[key]} />
					  ))
					: ''}
			</div>
			<div className={styles.buttons}>
				<button onClick={addItem}>add</button>
			</div>
		</div>
	);
};

export default Board;
