import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import imageFont from '../img/hGFcfhVyfbs.png';
import './Persik.css';

const myURL = new URL('https://auto.ru');


const Home = ({ id, go}) => (
	<Panel id={id}>

	
		<PanelHeader> VK Theme </PanelHeader>
		{<Group title="User Data Fetched with VK Bridge">
			<center><img className="ImageFont" src={imageFont} alt="Persik The Cat"/></center>
		</Group>}

		<Group title="Navigation Example">

			<Div>

				<Button size="xl" level = "2" onClick={() => window.open('http://365best24cons.ru/yk53Xn/productive', '_blank')}>
				Запустить
				</Button>
				
			
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired
	/*fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),*/
};

export default Home;
