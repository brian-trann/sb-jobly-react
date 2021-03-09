import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyCard from './CompanyCard';
const CompanyList = ({ companies }) => {
	// const [companiesList, setCompaniesList] = useState([])

	return (
		<React.Fragment>
			<div>This is the CompanyList</div>
			{companies.map((company) => (
				<Link to={`/companies/${company.handle}`} key={company.handle}>
					<CompanyCard company={company} />
				</Link>
			))}
		</React.Fragment>
	);
};

export default CompanyList;
/**
 * For each company in the list, render a card
 *  - onClick card => /companies/:name
 */
CompanyList.defaultProps = {
	companies : [
		{
			handle       : 'anderson-arias-morrow',
			name         : 'Anderson, Arias and Morrow',
			description  :
				'Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.',
			numEmployees : 245,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'arnold-berger-townsend',
			name         : 'Arnold, Berger and Townsend',
			description  :
				'Kind crime at perhaps beat. Enjoy deal purpose serve begin or thought. Congress everything miss tend.',
			numEmployees : 795,
			logoUrl      : null
		},
		{
			handle       : 'ayala-buchanan',
			name         : 'Ayala-Buchanan',
			description  :
				'Make radio physical southern. His white on attention kitchen market upon. Represent west open seven. Particularly subject billion much score thank bag somebody.',
			numEmployees : 309,
			logoUrl      : null
		},
		{
			handle       : 'baker-santos',
			name         : 'Baker-Santos',
			description  :
				'Compare certain use. Writer time lay word garden. Resource task interesting voice.',
			numEmployees : 225,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'bauer-gallagher',
			name         : 'Bauer-Gallagher',
			description  : 'Difficult ready trip question produce produce someone.',
			numEmployees : 862,
			logoUrl      : null
		},
		{
			handle       : 'boyd-evans',
			name         : 'Boyd-Evans',
			description  :
				'Build respond generation tree. No five keep. Happy medical back fine focus suffer modern.',
			numEmployees : 698,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'burton-ltd',
			name         : 'Burton Ltd',
			description  :
				'Cover couple speech bar cell measure movement finally. Nation pull inside.',
			numEmployees : 610,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'carr-wells-jones',
			name         : 'Carr, Wells and Jones',
			description  :
				'Human medical throw book pick possible. Maybe yeah word beat treatment impact campaign.',
			numEmployees : 27,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'davis-davis',
			name         : 'Davis-Davis',
			description  :
				'Career participant difficult. Decide claim particular century society. Question growth two staff.',
			numEmployees : 23,
			logoUrl      : null
		},
		{
			handle       : 'edwards-lee-reese',
			name         : 'Edwards, Lee and Reese',
			description  :
				'To much recent it reality coach decision Mr. Dog language evidence minute either deep situation pattern. Other cold bad loss surface real show.',
			numEmployees : 744,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'erickson-inc',
			name         : 'Erickson Inc',
			description  :
				'Interesting environment owner beautiful school politics. General friend hair player dinner last administration teacher.',
			numEmployees : 267,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'foster-rice',
			name         : 'Foster-Rice',
			description  :
				'Either relate himself. Source TV data one general. Actually than seat eight.',
			numEmployees : 901,
			logoUrl      : null
		},
		{
			handle       : 'garcia-ray',
			name         : 'Garcia-Ray',
			description  : 'Laugh low follow fear. Politics main size fine.',
			numEmployees : 217,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'garner-michael',
			name         : 'Garner-Michael',
			description  :
				'Necessary thousand parent since discuss director. Visit machine skill five the.',
			numEmployees : 940,
			logoUrl      : null
		},
		{
			handle       : 'gillespie-smith',
			name         : 'Gillespie-Smith',
			description  :
				'Candidate ability democratic make drug. Player themselves like front. Over through style loss win very when.',
			numEmployees : 302,
			logoUrl      : '/logos/logo1.png'
		},
		{
			handle       : 'graham-herring-lane',
			name         : 'Graham, Herring and Lane',
			description  :
				'Enough attack return. Fall gas someone her another point those. Star public painting show concern.',
			numEmployees : 188,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'hall-davis',
			name         : 'Hall-Davis',
			description  :
				'Adult go economic off into. Suddenly happy according only common. Father plant wrong free traditional.',
			numEmployees : 749,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'hall-mills',
			name         : 'Hall-Mills',
			description  : 'Change stage tell note hundred. Worry where program wait.',
			numEmployees : 266,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'hudson-inc',
			name         : 'Hudson Inc',
			description  :
				'End now meet staff. Long government force why bar. Provide bring hope staff almost many be a.',
			numEmployees : 627,
			logoUrl      : null
		},
		{
			handle       : 'humphrey-llc',
			name         : 'Humphrey LLC',
			description  :
				'Agent actually able paper nor. Tell then court full agree without assume.',
			numEmployees : 678,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'ingram-ferguson-rubio',
			name         : 'Ingram, Ferguson and Rubio',
			description  :
				'Human summer field mean impact could exactly. Business read north project will. Left dream use Democrat.',
			numEmployees : 753,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'jackson-sons',
			name         : 'Jackson and Sons',
			description  : 'President couple political sit create.',
			numEmployees : 649,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'jackson-davila-conley',
			name         : 'Jackson, Davila and Conley',
			description  : 'Consider with build either.',
			numEmployees : 813,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'logan-miller',
			name         : 'Logan-Miller',
			description  : 'Pattern hand where never. Social across ability which structure.',
			numEmployees : 429,
			logoUrl      : null
		},
		{
			handle       : 'martinez-daniels',
			name         : 'Martinez-Daniels',
			description  : 'Five source market nation. Drop foreign raise pass.',
			numEmployees : 12,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'mejia-scott-ryan',
			name         : 'Mejia, Scott and Ryan',
			description  :
				'General traditional late situation discussion dog. Before best up strategy about direction.',
			numEmployees : null,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'miller-woods-hernandez',
			name         : 'Miller, Woods and Hernandez',
			description  :
				'Including theory protect reveal energy himself probably. Test leave mother area however.',
			numEmployees : 444,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'mitchell-brown',
			name         : 'Mitchell-Brown',
			description  : 'Republican truth church generation voice price issue.',
			numEmployees : 288,
			logoUrl      : '/logos/logo1.png'
		},
		{
			handle       : 'moore-plc',
			name         : 'Moore PLC',
			description  :
				'Magazine thing eight shake window might they organization. Environmental it bag green.',
			numEmployees : 100,
			logoUrl      : null
		},
		{
			handle       : 'morgan-sullivan',
			name         : 'Morgan-Sullivan',
			description  :
				'Own once artist part put authority wait. Focus free even. Why friend civil visit.',
			numEmployees : 409,
			logoUrl      : null
		},
		{
			handle       : 'mueller-moore',
			name         : 'Mueller-Moore',
			description  :
				'Edge may report though least pressure likely. Cost short appear program hair seven.',
			numEmployees : 932,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'norman-harvey',
			name         : 'Norman-Harvey',
			description  :
				'Drop along test material education. Opportunity forget campaign federal certainly total hair.',
			numEmployees : null,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'owen-newton',
			name         : 'Owen-Newton',
			description  :
				'Red compare try way. Bed standard again number wrong force. Stop exactly agent product economy someone. North describe site manager employee customer.',
			numEmployees : 953,
			logoUrl      : null
		},
		{
			handle       : 'perez-miller',
			name         : 'Perez-Miller',
			description  :
				'Space one approach wife son. Themselves give necessary follow employee return feel. Step animal doctor sign water early.',
			numEmployees : 298,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'pugh-ltd',
			name         : 'Pugh Ltd',
			description  : 'Believe reflect perform TV son.',
			numEmployees : 87,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'reynolds-greene',
			name         : 'Reynolds-Greene',
			description  :
				'Effect win area officer office economy. Congress travel would resource difficult. Nice president mind dinner.',
			numEmployees : 343,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'rivas-llc',
			name         : 'Rivas LLC',
			description  : 'Would road lot research wide mouth. Resource along office drug.',
			numEmployees : 552,
			logoUrl      : null
		},
		{
			handle       : 'robbins-marsh-martin',
			name         : 'Robbins, Marsh and Martin',
			description  :
				'Now never worry usually another ability concern hair. Fly lot six protect participant. Teach through head.',
			numEmployees : 709,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'russo-gillespie-conrad',
			name         : 'Russo, Gillespie and Conrad',
			description  :
				'South sound knowledge guy. Up I size anyone issue drop. Agent light significant mouth while.',
			numEmployees : 398,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'salas-group',
			name         : 'Salas Group',
			description  :
				'Central whom mouth partner bring newspaper special city. Show second cost newspaper can early play.',
			numEmployees : 624,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'scott-smith',
			name         : 'Scott-Smith',
			description  :
				'Room newspaper foot. Student daughter their themselves top almost near. Wait time recently it street follow medical nothing.',
			numEmployees : 993,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'sellers-bryant',
			name         : 'Sellers-Bryant',
			description  :
				'Language discussion mission soon wait according executive. Financial say husband anyone money politics. Dinner action purpose mouth environment I white.',
			numEmployees : 369,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'smith-llc',
			name         : 'Smith LLC',
			description  : 'Statement use per mission method. Order truth method.',
			numEmployees : 908,
			logoUrl      : null
		},
		{
			handle       : 'stone-stewart',
			name         : 'Stone-Stewart',
			description  :
				'Require successful family but. Traditional article late eight lose common send budget. Better opportunity law country various represent strong probably.',
			numEmployees : 459,
			logoUrl      : null
		},
		{
			handle       : 'taylor-yu-lee',
			name         : 'Taylor, Yu and Lee',
			description  : 'Down bag serve. Officer season company.',
			numEmployees : 226,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'thomas-sons',
			name         : 'Thomas and Sons',
			description  : 'Book detail scene continue. Art strategy because list two.',
			numEmployees : 51,
			logoUrl      : '/logos/logo1.png'
		},
		{
			handle       : 'watson-davis',
			name         : 'Watson-Davis',
			description  : 'Year join loss.',
			numEmployees : 819,
			logoUrl      : '/logos/logo3.png'
		},
		{
			handle       : 'weber-hernandez',
			name         : 'Weber-Hernandez',
			description  : 'Contain product south picture scientist.',
			numEmployees : 681,
			logoUrl      : '/logos/logo4.png'
		},
		{
			handle       : 'wiggins-frederick-boyer',
			name         : 'Wiggins, Frederick and Boyer',
			description  :
				'Institution structure say argue bit. Each option high executive easy pattern. Majority white hour there reach drive produce.',
			numEmployees : 298,
			logoUrl      : '/logos/logo2.png'
		},
		{
			handle       : 'willis-henson-miller',
			name         : 'Willis, Henson and Miller',
			description  : 'About dream practice. Father significant senior health within four.',
			numEmployees : 821,
			logoUrl      : null
		}
	]
};
