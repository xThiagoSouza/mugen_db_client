import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MdMenu, MdSearch } from 'react-icons/md';

import { Side, Navbar, SubNavbar, Input } from './styles';

export default function Sidebar({ setCharId }) {
	const [sagas, setSagas] = useState(null);
	const [sagasFiltered, setSagasFiltered] = useState([]);
	const [showMenu, setShowMenu] = useState(false);
	const [showSearchChar, setShowSearchChar] = useState(false);
	const [searchKey, setSearchKey] = useState(null);
	const [showChars, setShowChars] = useState({});

	useEffect(() => {
		async function loadData() {
			try {
				const { data } = await axios.get('http://localhost:3001');

				setSagas(data.sagas);
				setSagasFiltered(data.sagas);
			} catch (error) {
				console.log(error);
			}
		}

		loadData();
	}, []);

	useEffect(() => {
		if (!sagas) return;

		if (searchKey !== '') {
			setSagasFiltered(
				sagas
					.map((saga) => {
						let chars = saga.chars.filter((char) =>
							char.name.toLowerCase().includes(searchKey.toLowerCase())
						);

						if (chars.length > 0) {
							return {
								...saga,
								chars,
							};
						} else {
							return '';
						}
					})
					.filter((saga) => saga !== '')
			);
		} else {
			setSagasFiltered(sagas);
		}
		// eslint-disable-next-line
	}, [searchKey]);

	function handleShowchars(e) {
		e.preventDefault();
		const className = e.target.className;
		const textContent = e.target.firstChild.textContent;

		if (className === textContent) {
			setShowChars({
				...showChars,
				[className]: !showChars[className],
			});
		}
	}

	return (
		<Side>
			<div className="menu-hambuger">
				<MdMenu
					color={'#000'}
					size={30}
					className="menuImg"
					onClick={() => setShowMenu(!showMenu)}
				/>
			</div>

			<h2>
				Personagens
				<MdSearch
					color={'#fff'}
					size={20}
					onClick={() => setShowSearchChar(!showSearchChar)}
				/>
			</h2>

			<Input
				type="text"
				name="searchChar"
				className="searchChar"
				showSearchChar={showSearchChar}
				onChange={(e) => setSearchKey(e.target.value)}
				placeholder="Buscar personagem"
			/>

			<Navbar showMenu={showMenu} onClick={handleShowchars}>
				{sagasFiltered &&
					sagasFiltered.map((obj) => (
						<li key={obj.saga} className={obj.saga}>
							{obj.saga}
							<SubNavbar
								showChars={
									showChars[obj.saga] ? showChars[obj.saga].toString() : 'false'
								}
							>
								{obj.chars &&
									obj.chars.map((char) => (
										<li key={char.id} onClick={() => setCharId(char.id)}>
											{char.name}
										</li>
									))}
							</SubNavbar>
						</li>
					))}
			</Navbar>
		</Side>
	);
}
