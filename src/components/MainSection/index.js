import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Main, Infos, Moves, InfosBio } from './styles';
import { Title } from '../Title';

import noImage from '../../assets/images/no-image.png';

export default function MainSection({ charId }) {
	const [charInfos, setCharInfos] = useState({});

	useEffect(() => {
		async function loadInfos() {
			try {
				const { data } = await axios.get(
					`http://localhost:3001/char/${charId}`
				);
				setCharInfos(data);
			} catch (error) {
				console.log(error);
			}
		}

		loadInfos();
	}, [charId]);

	return (
		<Main>
			<Title>Infos</Title>
			<Infos>
				{charInfos.name ? (
					<>
						{(
							<img
								src={`http://localhost:3001/images/${charInfos.saga
									.toLowerCase()
									.replace(/ /g, '-')}/${charInfos.name
									.toLowerCase()
									.replace(/ /g, '-')}.jpg`}
								alt="avatar"
							/>
						) || <img src={noImage} alt="movelist not found " />}
						<InfosBio>
							<p>Nome: {charInfos.name}</p>
							<p>Saga: {charInfos.saga}</p>
						</InfosBio>
					</>
				) : (
					''
				)}
			</Infos>

			<Title>Moves</Title>
			<Moves>
				{charInfos.moves && charInfos.moves.length !== 0 ? (
					<>
						{charInfos.moves.map((move) => (
							<img
								key={move}
								src={`http://localhost:3001/images/${charInfos.saga
									.toLowerCase()
									.replace(/ /g, '-')}/${move}`}
								alt={move}
							/>
						))}
					</>
				) : charInfos.name ? (
					<img src={noImage} alt="movelist not found " />
				) : (
					''
				)}
			</Moves>
		</Main>
	);
}
