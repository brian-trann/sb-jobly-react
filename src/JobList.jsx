import React from 'react';
import './JobList.css';
import JobCard from './JobCard';
import SearchForm from './SearchForm';

const JobList = ({ jobs }) => {
	return (
		<div className='container-fluid container-md JobList'>
			<SearchForm />
			{jobs.map((job) => <JobCard job={job} key={job.id} />)}
		</div>
	);
};
export default JobList;
JobList.defaultProps = {
	jobs : [
		{
			id            : 200,
			title         : 'Accommodation manager',
			salary        : 126000,
			equity        : null,
			companyHandle : 'mejia-scott-ryan',
			companyName   : 'Mejia, Scott and Ryan'
		},
		{
			id            : 36,
			title         : 'Accountant, chartered certified',
			salary        : 175000,
			equity        : '0',
			companyHandle : 'stone-stewart',
			companyName   : 'Stone-Stewart'
		},
		{
			id            : 161,
			title         : 'Accountant, chartered certified',
			salary        : 86000,
			equity        : '0.070',
			companyHandle : 'boyd-evans',
			companyName   : 'Boyd-Evans'
		},
		{
			id            : 86,
			title         : 'Advertising account executive',
			salary        : 130000,
			equity        : '0.064',
			companyHandle : 'thomas-sons',
			companyName   : 'Thomas and Sons'
		},
		{
			id            : 50,
			title         : 'Advertising account executive',
			salary        : null,
			equity        : '0',
			companyHandle : 'thomas-sons',
			companyName   : 'Thomas and Sons'
		},
		{
			id            : 134,
			title         : 'Aeronautical engineer',
			salary        : 156000,
			equity        : '0.055',
			companyHandle : 'perez-miller',
			companyName   : 'Perez-Miller'
		},
		{
			id            : 78,
			title         : 'Aeronautical engineer',
			salary        : 135000,
			equity        : '0.078',
			companyHandle : 'norman-harvey',
			companyName   : 'Norman-Harvey'
		},
		{
			id            : 172,
			title         : 'Agricultural consultant',
			salary        : 67000,
			equity        : null,
			companyHandle : 'moore-plc',
			companyName   : 'Moore PLC'
		},
		{
			id            : 89,
			title         : 'Air cabin crew',
			salary        : 105000,
			equity        : '0.077',
			companyHandle : 'ingram-ferguson-rubio',
			companyName   : 'Ingram, Ferguson and Rubio'
		},
		{
			id            : 71,
			title         : 'Applications developer',
			salary        : 84000,
			equity        : '0.091',
			companyHandle : 'sellers-bryant',
			companyName   : 'Sellers-Bryant'
		},
		{
			id            : 184,
			title         : 'Arboriculturist',
			salary        : 191000,
			equity        : '0.062',
			companyHandle : 'salas-group',
			companyName   : 'Salas Group'
		},
		{
			id            : 60,
			title         : 'Architectural technologist',
			salary        : 57000,
			equity        : '0',
			companyHandle : 'owen-newton',
			companyName   : 'Owen-Newton'
		},
		{
			id            : 158,
			title         : 'Armed forces technical officer',
			salary        : 136000,
			equity        : '0.012',
			companyHandle : 'scott-smith',
			companyName   : 'Scott-Smith'
		},
		{
			id            : 98,
			title         : 'Art gallery manager',
			salary        : 73000,
			equity        : '0.054',
			companyHandle : 'perez-miller',
			companyName   : 'Perez-Miller'
		},
		{
			id            : 62,
			title         : 'Art gallery manager',
			salary        : null,
			equity        : '0.085',
			companyHandle : 'anderson-arias-morrow',
			companyName   : 'Anderson, Arias and Morrow'
		},
		{
			id            : 47,
			title         : 'Astronomer',
			salary        : 143000,
			equity        : null,
			companyHandle : 'watson-davis',
			companyName   : 'Watson-Davis'
		},
		{
			id            : 181,
			title         : 'Astronomer',
			salary        : 55000,
			equity        : '0.074',
			companyHandle : 'martinez-daniels',
			companyName   : 'Martinez-Daniels'
		},
		{
			id            : 29,
			title         : 'Barrister',
			salary        : 130000,
			equity        : '0',
			companyHandle : 'stone-stewart',
			companyName   : 'Stone-Stewart'
		},
		{
			id            : 53,
			title         : 'Best boy',
			salary        : null,
			equity        : '0',
			companyHandle : 'jackson-sons',
			companyName   : 'Jackson and Sons'
		},
		{
			id            : 69,
			title         : 'Bonds trader',
			salary        : null,
			equity        : null,
			companyHandle : 'mitchell-brown',
			companyName   : 'Mitchell-Brown'
		},
		{
			id            : 193,
			title         : 'Bookseller',
			salary        : 164000,
			equity        : '0',
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 51,
			title         : 'Buyer, industrial',
			salary        : null,
			equity        : null,
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 66,
			title         : 'Camera operator',
			salary        : 130000,
			equity        : '0',
			companyHandle : 'arnold-berger-townsend',
			companyName   : 'Arnold, Berger and Townsend'
		},
		{
			id            : 150,
			title         : 'Camera operator',
			salary        : 51000,
			equity        : '0.066',
			companyHandle : 'jackson-davila-conley',
			companyName   : 'Jackson, Davila and Conley'
		},
		{
			id            : 82,
			title         : 'Careers adviser',
			salary        : 57000,
			equity        : '0.051',
			companyHandle : 'carr-wells-jones',
			companyName   : 'Carr, Wells and Jones'
		},
		{
			id            : 188,
			title         : 'Chartered loss adjuster',
			salary        : 72000,
			equity        : '0.084',
			companyHandle : 'davis-davis',
			companyName   : 'Davis-Davis'
		},
		{
			id            : 177,
			title         : 'Chief Executive Officer',
			salary        : 83000,
			equity        : null,
			companyHandle : 'miller-woods-hernandez',
			companyName   : 'Miller, Woods and Hernandez'
		},
		{
			id            : 183,
			title         : 'Chief Technology Officer',
			salary        : 64000,
			equity        : '0.067',
			companyHandle : 'robbins-marsh-martin',
			companyName   : 'Robbins, Marsh and Martin'
		},
		{
			id            : 123,
			title         : 'Chief of Staff',
			salary        : 110000,
			equity        : '0.016',
			companyHandle : 'scott-smith',
			companyName   : 'Scott-Smith'
		},
		{
			id            : 175,
			title         : 'Clinical biochemist',
			salary        : 92000,
			equity        : null,
			companyHandle : 'norman-harvey',
			companyName   : 'Norman-Harvey'
		},
		{
			id            : 120,
			title         : 'Clinical cytogeneticist',
			salary        : 152000,
			equity        : '0.027',
			companyHandle : 'mitchell-brown',
			companyName   : 'Mitchell-Brown'
		},
		{
			id            : 72,
			title         : 'Clothing/textile technologist',
			salary        : 171000,
			equity        : '0.041',
			companyHandle : 'smith-llc',
			companyName   : 'Smith LLC'
		},
		{
			id            : 23,
			title         : 'Colour technologist',
			salary        : 81000,
			equity        : '0',
			companyHandle : 'burton-ltd',
			companyName   : 'Burton Ltd'
		},
		{
			id            : 111,
			title         : 'Conservation officer, historic buildings',
			salary        : 168000,
			equity        : null,
			companyHandle : 'robbins-marsh-martin',
			companyName   : 'Robbins, Marsh and Martin'
		},
		{
			id            : 185,
			title         : 'Conservation officer, nature',
			salary        : 108000,
			equity        : '0.006',
			companyHandle : 'jackson-davila-conley',
			companyName   : 'Jackson, Davila and Conley'
		},
		{
			id            : 1,
			title         : 'Conservator, furniture',
			salary        : 110000,
			equity        : '0',
			companyHandle : 'watson-davis',
			companyName   : 'Watson-Davis'
		},
		{
			id            : 3,
			title         : 'Consulting civil engineer',
			salary        : 60000,
			equity        : '0',
			companyHandle : 'sellers-bryant',
			companyName   : 'Sellers-Bryant'
		},
		{
			id            : 132,
			title         : 'Contractor',
			salary        : 89000,
			equity        : '0.065',
			companyHandle : 'mueller-moore',
			companyName   : 'Mueller-Moore'
		},
		{
			id            : 8,
			title         : 'Control and instrumentation engineer',
			salary        : 171000,
			equity        : '0',
			companyHandle : 'salas-group',
			companyName   : 'Salas Group'
		},
		{
			id            : 195,
			title         : 'Copy',
			salary        : 103000,
			equity        : '0',
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 48,
			title         : 'Counsellor',
			salary        : null,
			equity        : '0',
			companyHandle : 'owen-newton',
			companyName   : 'Owen-Newton'
		},
		{
			id            : 31,
			title         : 'Database administrator',
			salary        : 79000,
			equity        : '0',
			companyHandle : 'willis-henson-miller',
			companyName   : 'Willis, Henson and Miller'
		},
		{
			id            : 103,
			title         : 'Dealer',
			salary        : 175000,
			equity        : '0',
			companyHandle : 'hall-mills',
			companyName   : 'Hall-Mills'
		},
		{
			id            : 96,
			title         : 'Designer, fashion/clothing',
			salary        : 81000,
			equity        : '0.026',
			companyHandle : 'garcia-ray',
			companyName   : 'Garcia-Ray'
		},
		{
			id            : 187,
			title         : 'Designer, furniture',
			salary        : 149000,
			equity        : '0.041',
			companyHandle : 'mueller-moore',
			companyName   : 'Mueller-Moore'
		},
		{
			id            : 55,
			title         : 'Designer, jewellery',
			salary        : null,
			equity        : '0',
			companyHandle : 'weber-hernandez',
			companyName   : 'Weber-Hernandez'
		},
		{
			id            : 79,
			title         : 'Development worker, community',
			salary        : 192000,
			equity        : '0.047',
			companyHandle : 'weber-hernandez',
			companyName   : 'Weber-Hernandez'
		},
		{
			id            : 170,
			title         : 'Dietitian',
			salary        : 198000,
			equity        : '0',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 4,
			title         : 'Early years teacher',
			salary        : 55000,
			equity        : '0',
			companyHandle : 'perez-miller',
			companyName   : 'Perez-Miller'
		},
		{
			id            : 138,
			title         : 'Editor, film/video',
			salary        : 199000,
			equity        : '0.070',
			companyHandle : 'bauer-gallagher',
			companyName   : 'Bauer-Gallagher'
		},
		{
			id            : 70,
			title         : 'Editor, magazine features',
			salary        : 118000,
			equity        : '0.002',
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 171,
			title         : 'Electrical engineer',
			salary        : 157000,
			equity        : null,
			companyHandle : 'jackson-davila-conley',
			companyName   : 'Jackson, Davila and Conley'
		},
		{
			id            : 18,
			title         : 'Embryologist, clinical',
			salary        : 138000,
			equity        : '0',
			companyHandle : 'anderson-arias-morrow',
			companyName   : 'Anderson, Arias and Morrow'
		},
		{
			id            : 27,
			title         : 'Energy engineer',
			salary        : 62000,
			equity        : '0',
			companyHandle : 'norman-harvey',
			companyName   : 'Norman-Harvey'
		},
		{
			id            : 196,
			title         : 'Engineer, broadcasting (operations)',
			salary        : 86000,
			equity        : '0',
			companyHandle : 'baker-santos',
			companyName   : 'Baker-Santos'
		},
		{
			id            : 63,
			title         : 'Engineer, chemical',
			salary        : 81000,
			equity        : '0',
			companyHandle : 'russo-gillespie-conrad',
			companyName   : 'Russo, Gillespie and Conrad'
		},
		{
			id            : 114,
			title         : 'Engineer, civil (contracting)',
			salary        : null,
			equity        : '0.018',
			companyHandle : 'moore-plc',
			companyName   : 'Moore PLC'
		},
		{
			id            : 117,
			title         : 'Engineer, energy',
			salary        : null,
			equity        : '0.048',
			companyHandle : 'arnold-berger-townsend',
			companyName   : 'Arnold, Berger and Townsend'
		},
		{
			id            : 136,
			title         : 'Engineer, materials',
			salary        : 140000,
			equity        : '0.057',
			companyHandle : 'mitchell-brown',
			companyName   : 'Mitchell-Brown'
		},
		{
			id            : 75,
			title         : 'Engineer, materials',
			salary        : 185000,
			equity        : '0.081',
			companyHandle : 'garner-michael',
			companyName   : 'Garner-Michael'
		},
		{
			id            : 151,
			title         : 'Engineer, technical sales',
			salary        : 167000,
			equity        : '0.077',
			companyHandle : 'ingram-ferguson-rubio',
			companyName   : 'Ingram, Ferguson and Rubio'
		},
		{
			id            : 168,
			title         : 'Engineer, technical sales',
			salary        : 157000,
			equity        : '0.083',
			companyHandle : 'baker-santos',
			companyName   : 'Baker-Santos'
		},
		{
			id            : 179,
			title         : 'Engineer, water',
			salary        : 165000,
			equity        : '0.010',
			companyHandle : 'ingram-ferguson-rubio',
			companyName   : 'Ingram, Ferguson and Rubio'
		},
		{
			id            : 77,
			title         : 'Engineering geologist',
			salary        : 89000,
			equity        : '0.043',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 34,
			title         : 'Engineering geologist',
			salary        : 170000,
			equity        : '0',
			companyHandle : 'garcia-ray',
			companyName   : 'Garcia-Ray'
		},
		{
			id            : 11,
			title         : 'English as a foreign language teacher',
			salary        : 111000,
			equity        : '0',
			companyHandle : 'russo-gillespie-conrad',
			companyName   : 'Russo, Gillespie and Conrad'
		},
		{
			id            : 58,
			title         : 'Ergonomist',
			salary        : 160000,
			equity        : '0',
			companyHandle : 'bauer-gallagher',
			companyName   : 'Bauer-Gallagher'
		},
		{
			id            : 154,
			title         : 'Estate manager/land agent',
			salary        : 94000,
			equity        : '0.008',
			companyHandle : 'jackson-davila-conley',
			companyName   : 'Jackson, Davila and Conley'
		},
		{
			id            : 144,
			title         : 'Farm manager',
			salary        : 138000,
			equity        : '0.085',
			companyHandle : 'stone-stewart',
			companyName   : 'Stone-Stewart'
		},
		{
			id            : 149,
			title         : 'Farm manager',
			salary        : 68000,
			equity        : '0.049',
			companyHandle : 'morgan-sullivan',
			companyName   : 'Morgan-Sullivan'
		},
		{
			id            : 139,
			title         : 'Fashion designer',
			salary        : 131000,
			equity        : '0.080',
			companyHandle : 'taylor-yu-lee',
			companyName   : 'Taylor, Yu and Lee'
		},
		{
			id            : 197,
			title         : 'Fashion designer',
			salary        : 137000,
			equity        : '0',
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 74,
			title         : 'Field seismologist',
			salary        : 62000,
			equity        : '0.064',
			companyHandle : 'martinez-daniels',
			companyName   : 'Martinez-Daniels'
		},
		{
			id            : 67,
			title         : 'Field trials officer',
			salary        : 137000,
			equity        : '0',
			companyHandle : 'davis-davis',
			companyName   : 'Davis-Davis'
		},
		{
			id            : 49,
			title         : 'Financial controller',
			salary        : null,
			equity        : '0',
			companyHandle : 'sellers-bryant',
			companyName   : 'Sellers-Bryant'
		},
		{
			id            : 14,
			title         : 'Financial planner',
			salary        : 115000,
			equity        : '0',
			companyHandle : 'taylor-yu-lee',
			companyName   : 'Taylor, Yu and Lee'
		},
		{
			id            : 141,
			title         : 'Financial risk analyst',
			salary        : 72000,
			equity        : '0.001',
			companyHandle : 'scott-smith',
			companyName   : 'Scott-Smith'
		},
		{
			id            : 90,
			title         : 'Financial trader',
			salary        : 153000,
			equity        : '0.012',
			companyHandle : 'garner-michael',
			companyName   : 'Garner-Michael'
		},
		{
			id            : 88,
			title         : 'Fisheries officer',
			salary        : 67000,
			equity        : '0.062',
			companyHandle : 'hall-davis',
			companyName   : 'Hall-Davis'
		},
		{
			id            : 84,
			title         : 'Forest/woodland manager',
			salary        : 156000,
			equity        : '0.030',
			companyHandle : 'carr-wells-jones',
			companyName   : 'Carr, Wells and Jones'
		},
		{
			id            : 135,
			title         : 'Freight forwarder',
			salary        : 183000,
			equity        : '0.093',
			companyHandle : 'burton-ltd',
			companyName   : 'Burton Ltd'
		},
		{
			id            : 54,
			title         : 'Freight forwarder',
			salary        : 183000,
			equity        : '0',
			companyHandle : 'hudson-inc',
			companyName   : 'Hudson Inc'
		},
		{
			id            : 128,
			title         : 'Geochemist',
			salary        : 130000,
			equity        : '0.004',
			companyHandle : 'smith-llc',
			companyName   : 'Smith LLC'
		},
		{
			id            : 173,
			title         : 'Geochemist',
			salary        : 104000,
			equity        : null,
			companyHandle : 'hudson-inc',
			companyName   : 'Hudson Inc'
		},
		{
			id            : 174,
			title         : 'Geologist, engineering',
			salary        : 116000,
			equity        : null,
			companyHandle : 'jackson-davila-conley',
			companyName   : 'Jackson, Davila and Conley'
		},
		{
			id            : 127,
			title         : 'Glass blower/designer',
			salary        : 126000,
			equity        : '0.099',
			companyHandle : 'anderson-arias-morrow',
			companyName   : 'Anderson, Arias and Morrow'
		},
		{
			id            : 163,
			title         : 'Glass blower/designer',
			salary        : 60000,
			equity        : '0.095',
			companyHandle : 'mueller-moore',
			companyName   : 'Mueller-Moore'
		},
		{
			id            : 85,
			title         : 'Haematologist',
			salary        : 63000,
			equity        : '0.062',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 81,
			title         : 'Health promotion specialist',
			salary        : 72000,
			equity        : '0.010',
			companyHandle : 'burton-ltd',
			companyName   : 'Burton Ltd'
		},
		{
			id            : 108,
			title         : 'Historic buildings inspector/conservation officer',
			salary        : 135000,
			equity        : null,
			companyHandle : 'rivas-llc',
			companyName   : 'Rivas LLC'
		},
		{
			id            : 92,
			title         : 'Historic buildings inspector/conservation officer',
			salary        : 129000,
			equity        : '0.052',
			companyHandle : 'watson-davis',
			companyName   : 'Watson-Davis'
		},
		{
			id            : 130,
			title         : 'Historic buildings inspector/conservation officer',
			salary        : 65000,
			equity        : '0.075',
			companyHandle : 'mejia-scott-ryan',
			companyName   : 'Mejia, Scott and Ryan'
		},
		{
			id            : 133,
			title         : 'Hydrologist',
			salary        : 50000,
			equity        : '0.097',
			companyHandle : 'wiggins-frederick-boyer',
			companyName   : 'Wiggins, Frederick and Boyer'
		},
		{
			id            : 32,
			title         : 'IT consultant',
			salary        : 59000,
			equity        : '0',
			companyHandle : 'gillespie-smith',
			companyName   : 'Gillespie-Smith'
		},
		{
			id            : 2,
			title         : 'Information officer',
			salary        : 200000,
			equity        : '0',
			companyHandle : 'hall-mills',
			companyName   : 'Hall-Mills'
		},
		{
			id            : 97,
			title         : 'Information systems manager',
			salary        : 123000,
			equity        : '0.100',
			companyHandle : 'arnold-berger-townsend',
			companyName   : 'Arnold, Berger and Townsend'
		},
		{
			id            : 122,
			title         : 'Insurance underwriter',
			salary        : null,
			equity        : '0.008',
			companyHandle : 'hall-davis',
			companyName   : 'Hall-Davis'
		},
		{
			id            : 101,
			title         : 'Intelligence analyst',
			salary        : 148000,
			equity        : '0',
			companyHandle : 'sellers-bryant',
			companyName   : 'Sellers-Bryant'
		},
		{
			id            : 5,
			title         : 'Intelligence analyst',
			salary        : 77000,
			equity        : '0',
			companyHandle : 'garner-michael',
			companyName   : 'Garner-Michael'
		},
		{
			id            : 21,
			title         : 'Interior and spatial designer',
			salary        : 177000,
			equity        : '0',
			companyHandle : 'gillespie-smith',
			companyName   : 'Gillespie-Smith'
		},
		{
			id            : 52,
			title         : 'Interpreter',
			salary        : 55000,
			equity        : '0',
			companyHandle : 'hudson-inc',
			companyName   : 'Hudson Inc'
		},
		{
			id            : 110,
			title         : 'Investment banker, corporate',
			salary        : 131000,
			equity        : null,
			companyHandle : 'ingram-ferguson-rubio',
			companyName   : 'Ingram, Ferguson and Rubio'
		},
		{
			id            : 153,
			title         : 'Lawyer',
			salary        : 162000,
			equity        : '0.072',
			companyHandle : 'hall-mills',
			companyName   : 'Hall-Mills'
		},
		{
			id            : 198,
			title         : 'Learning disability nurse',
			salary        : 66000,
			equity        : null,
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 140,
			title         : 'Legal secretary',
			salary        : 155000,
			equity        : '0.080',
			companyHandle : 'pugh-ltd',
			companyName   : 'Pugh Ltd'
		},
		{
			id            : 106,
			title         : 'Leisure centre manager',
			salary        : 135000,
			equity        : null,
			companyHandle : 'edwards-lee-reese',
			companyName   : 'Edwards, Lee and Reese'
		},
		{
			id            : 30,
			title         : 'Loss adjuster, chartered',
			salary        : 76000,
			equity        : '0',
			companyHandle : 'bauer-gallagher',
			companyName   : 'Bauer-Gallagher'
		},
		{
			id            : 57,
			title         : 'Management consultant',
			salary        : 183000,
			equity        : '0',
			companyHandle : 'edwards-lee-reese',
			companyName   : 'Edwards, Lee and Reese'
		},
		{
			id            : 19,
			title         : 'Marine scientist',
			salary        : 54000,
			equity        : '0',
			companyHandle : 'scott-smith',
			companyName   : 'Scott-Smith'
		},
		{
			id            : 38,
			title         : 'Medical physicist',
			salary        : 84000,
			equity        : '0',
			companyHandle : 'perez-miller',
			companyName   : 'Perez-Miller'
		},
		{
			id            : 182,
			title         : 'Medical physicist',
			salary        : 110000,
			equity        : '0.015',
			companyHandle : 'mitchell-brown',
			companyName   : 'Mitchell-Brown'
		},
		{
			id            : 26,
			title         : 'Medical sales representative',
			salary        : 125000,
			equity        : '0',
			companyHandle : 'jackson-davila-conley',
			companyName   : 'Jackson, Davila and Conley'
		},
		{
			id            : 194,
			title         : 'Medical sales representative',
			salary        : 196000,
			equity        : '0',
			companyHandle : 'hall-mills',
			companyName   : 'Hall-Mills'
		},
		{
			id            : 37,
			title         : 'Merchant navy officer',
			salary        : 106000,
			equity        : '0',
			companyHandle : 'mitchell-brown',
			companyName   : 'Mitchell-Brown'
		},
		{
			id            : 166,
			title         : 'Meteorologist',
			salary        : 81000,
			equity        : '0.037',
			companyHandle : 'sellers-bryant',
			companyName   : 'Sellers-Bryant'
		},
		{
			id            : 10,
			title         : 'Multimedia programmer',
			salary        : 192000,
			equity        : '0',
			companyHandle : 'graham-herring-lane',
			companyName   : 'Graham, Herring and Lane'
		},
		{
			id            : 104,
			title         : 'Multimedia programmer',
			salary        : 154000,
			equity        : null,
			companyHandle : 'owen-newton',
			companyName   : 'Owen-Newton'
		},
		{
			id            : 33,
			title         : 'Museum/gallery conservator',
			salary        : 82000,
			equity        : '0',
			companyHandle : 'mejia-scott-ryan',
			companyName   : 'Mejia, Scott and Ryan'
		},
		{
			id            : 148,
			title         : 'Music therapist',
			salary        : 100000,
			equity        : '0.058',
			companyHandle : 'taylor-yu-lee',
			companyName   : 'Taylor, Yu and Lee'
		},
		{
			id            : 121,
			title         : 'Nature conservation officer',
			salary        : 82000,
			equity        : '0.093',
			companyHandle : 'watson-davis',
			companyName   : 'Watson-Davis'
		},
		{
			id            : 102,
			title         : 'Naval architect',
			salary        : 126000,
			equity        : '0',
			companyHandle : 'scott-smith',
			companyName   : 'Scott-Smith'
		},
		{
			id            : 40,
			title         : "Nurse, children's",
			salary        : 162000,
			equity        : null,
			companyHandle : 'humphrey-llc',
			companyName   : 'Humphrey LLC'
		},
		{
			id            : 42,
			title         : 'Occupational hygienist',
			salary        : 79000,
			equity        : null,
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 16,
			title         : 'Occupational therapist',
			salary        : 183000,
			equity        : '0',
			companyHandle : 'garcia-ray',
			companyName   : 'Garcia-Ray'
		},
		{
			id            : 119,
			title         : 'Oceanographer',
			salary        : null,
			equity        : '0.097',
			companyHandle : 'anderson-arias-morrow',
			companyName   : 'Anderson, Arias and Morrow'
		},
		{
			id            : 190,
			title         : 'Operational investment banker',
			salary        : 200000,
			equity        : '0.022',
			companyHandle : 'smith-llc',
			companyName   : 'Smith LLC'
		},
		{
			id            : 99,
			title         : 'Operational researcher',
			salary        : 167000,
			equity        : '0.020',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 17,
			title         : 'Ophthalmologist',
			salary        : 135000,
			equity        : '0',
			companyHandle : 'hall-mills',
			companyName   : 'Hall-Mills'
		},
		{
			id            : 155,
			title         : 'Orthoptist',
			salary        : 129000,
			equity        : '0.062',
			companyHandle : 'willis-henson-miller',
			companyName   : 'Willis, Henson and Miller'
		},
		{
			id            : 65,
			title         : 'Orthoptist',
			salary        : 200000,
			equity        : '0',
			companyHandle : 'perez-miller',
			companyName   : 'Perez-Miller'
		},
		{
			id            : 91,
			title         : 'Paramedic',
			salary        : 122000,
			equity        : '0.047',
			companyHandle : 'baker-santos',
			companyName   : 'Baker-Santos'
		},
		{
			id            : 12,
			title         : 'Passenger transport manager',
			salary        : 70000,
			equity        : '0',
			companyHandle : 'rivas-llc',
			companyName   : 'Rivas LLC'
		},
		{
			id            : 61,
			title         : 'Patent attorney',
			salary        : 143000,
			equity        : '0',
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 25,
			title         : 'Pharmacist, hospital',
			salary        : 194000,
			equity        : '0',
			companyHandle : 'boyd-evans',
			companyName   : 'Boyd-Evans'
		},
		{
			id            : 9,
			title         : 'Photographer',
			salary        : 198000,
			equity        : '0',
			companyHandle : 'davis-davis',
			companyName   : 'Davis-Davis'
		},
		{
			id            : 112,
			title         : 'Physicist, medical',
			salary        : 190000,
			equity        : null,
			companyHandle : 'humphrey-llc',
			companyName   : 'Humphrey LLC'
		},
		{
			id            : 118,
			title         : 'Plant breeder/geneticist',
			salary        : null,
			equity        : '0.081',
			companyHandle : 'thomas-sons',
			companyName   : 'Thomas and Sons'
		},
		{
			id            : 39,
			title         : 'Podiatrist',
			salary        : 68000,
			equity        : null,
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 113,
			title         : 'Press sub',
			salary        : 100000,
			equity        : null,
			companyHandle : 'erickson-inc',
			companyName   : 'Erickson Inc'
		},
		{
			id            : 145,
			title         : 'Primary school teacher',
			salary        : 142000,
			equity        : '0.036',
			companyHandle : 'moore-plc',
			companyName   : 'Moore PLC'
		},
		{
			id            : 164,
			title         : 'Print production planner',
			salary        : 197000,
			equity        : '0.095',
			companyHandle : 'humphrey-llc',
			companyName   : 'Humphrey LLC'
		},
		{
			id            : 176,
			title         : 'Probation officer',
			salary        : 128000,
			equity        : null,
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 189,
			title         : 'Producer, radio',
			salary        : 168000,
			equity        : '0.010',
			companyHandle : 'salas-group',
			companyName   : 'Salas Group'
		},
		{
			id            : 137,
			title         : 'Product designer',
			salary        : 184000,
			equity        : '0.090',
			companyHandle : 'gillespie-smith',
			companyName   : 'Gillespie-Smith'
		},
		{
			id            : 13,
			title         : 'Psychologist, clinical',
			salary        : 172000,
			equity        : '0',
			companyHandle : 'hudson-inc',
			companyName   : 'Hudson Inc'
		},
		{
			id            : 180,
			title         : 'Psychologist, counselling',
			salary        : 111000,
			equity        : '0.059',
			companyHandle : 'taylor-yu-lee',
			companyName   : 'Taylor, Yu and Lee'
		},
		{
			id            : 165,
			title         : 'Psychologist, counselling',
			salary        : 180000,
			equity        : '0.008',
			companyHandle : 'perez-miller',
			companyName   : 'Perez-Miller'
		},
		{
			id            : 59,
			title         : 'Psychologist, forensic',
			salary        : 176000,
			equity        : '0',
			companyHandle : 'boyd-evans',
			companyName   : 'Boyd-Evans'
		},
		{
			id            : 105,
			title         : 'Psychologist, occupational',
			salary        : 190000,
			equity        : null,
			companyHandle : 'robbins-marsh-martin',
			companyName   : 'Robbins, Marsh and Martin'
		},
		{
			id            : 186,
			title         : 'Psychologist, sport and exercise',
			salary        : 172000,
			equity        : '0.061',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 94,
			title         : 'Public librarian',
			salary        : 115000,
			equity        : '0.099',
			companyHandle : 'norman-harvey',
			companyName   : 'Norman-Harvey'
		},
		{
			id            : 159,
			title         : 'Public relations officer',
			salary        : 112000,
			equity        : '0.087',
			companyHandle : 'weber-hernandez',
			companyName   : 'Weber-Hernandez'
		},
		{
			id            : 146,
			title         : 'Quality manager',
			salary        : 138000,
			equity        : '0.002',
			companyHandle : 'russo-gillespie-conrad',
			companyName   : 'Russo, Gillespie and Conrad'
		},
		{
			id            : 76,
			title         : 'Race relations officer',
			salary        : 97000,
			equity        : '0.065',
			companyHandle : 'bauer-gallagher',
			companyName   : 'Bauer-Gallagher'
		},
		{
			id            : 147,
			title         : 'Radio producer',
			salary        : 99000,
			equity        : '0.038',
			companyHandle : 'mitchell-brown',
			companyName   : 'Mitchell-Brown'
		},
		{
			id            : 143,
			title         : 'Ranger/warden',
			salary        : 86000,
			equity        : '0.095',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 152,
			title         : 'Ranger/warden',
			salary        : 145000,
			equity        : '0.046',
			companyHandle : 'jackson-davila-conley',
			companyName   : 'Jackson, Davila and Conley'
		},
		{
			id            : 156,
			title         : 'Recycling officer',
			salary        : 57000,
			equity        : '0.098',
			companyHandle : 'carr-wells-jones',
			companyName   : 'Carr, Wells and Jones'
		},
		{
			id            : 142,
			title         : 'Regulatory affairs officer',
			salary        : 96000,
			equity        : '0.061',
			companyHandle : 'logan-miller',
			companyName   : 'Logan-Miller'
		},
		{
			id            : 28,
			title         : 'Research officer, government',
			salary        : 167000,
			equity        : '0',
			companyHandle : 'mejia-scott-ryan',
			companyName   : 'Mejia, Scott and Ryan'
		},
		{
			id            : 43,
			title         : 'Research officer, political party',
			salary        : 134000,
			equity        : null,
			companyHandle : 'garner-michael',
			companyName   : 'Garner-Michael'
		},
		{
			id            : 199,
			title         : 'Research scientist (medical)',
			salary        : 175000,
			equity        : null,
			companyHandle : 'norman-harvey',
			companyName   : 'Norman-Harvey'
		},
		{
			id            : 169,
			title         : 'Scientist, audiological',
			salary        : 61000,
			equity        : '0.095',
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 15,
			title         : 'Scientist, forensic',
			salary        : 50000,
			equity        : '0',
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 46,
			title         : 'Scientist, product/process development',
			salary        : 106000,
			equity        : null,
			companyHandle : 'scott-smith',
			companyName   : 'Scott-Smith'
		},
		{
			id            : 157,
			title         : 'Scientist, research (life sciences)',
			salary        : 157000,
			equity        : '0.057',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 129,
			title         : 'Scientist, research (physical sciences)',
			salary        : 117000,
			equity        : '0.090',
			companyHandle : 'ayala-buchanan',
			companyName   : 'Ayala-Buchanan'
		},
		{
			id            : 73,
			title         : 'Secretary/administrator',
			salary        : 172000,
			equity        : '0.096',
			companyHandle : 'jackson-sons',
			companyName   : 'Jackson and Sons'
		},
		{
			id            : 160,
			title         : 'Set designer',
			salary        : 132000,
			equity        : '0.055',
			companyHandle : 'russo-gillespie-conrad',
			companyName   : 'Russo, Gillespie and Conrad'
		},
		{
			id            : 192,
			title         : 'Ship broker',
			salary        : 177000,
			equity        : '0',
			companyHandle : 'hall-davis',
			companyName   : 'Hall-Davis'
		},
		{
			id            : 87,
			title         : 'Ship broker',
			salary        : 124000,
			equity        : '0.045',
			companyHandle : 'davis-davis',
			companyName   : 'Davis-Davis'
		},
		{
			id            : 100,
			title         : 'Solicitor',
			salary        : 131000,
			equity        : '0.034',
			companyHandle : 'wiggins-frederick-boyer',
			companyName   : 'Wiggins, Frederick and Boyer'
		},
		{
			id            : 162,
			title         : 'Special effects artist',
			salary        : 101000,
			equity        : '0.023',
			companyHandle : 'willis-henson-miller',
			companyName   : 'Willis, Henson and Miller'
		},
		{
			id            : 64,
			title         : 'Speech and language therapist',
			salary        : 159000,
			equity        : '0',
			companyHandle : 'gillespie-smith',
			companyName   : 'Gillespie-Smith'
		},
		{
			id            : 80,
			title         : 'Speech and language therapist',
			salary        : 154000,
			equity        : '0.014',
			companyHandle : 'humphrey-llc',
			companyName   : 'Humphrey LLC'
		},
		{
			id            : 109,
			title         : 'Sports development officer',
			salary        : 102000,
			equity        : null,
			companyHandle : 'scott-smith',
			companyName   : 'Scott-Smith'
		},
		{
			id            : 6,
			title         : 'Surveyor, building',
			salary        : 144000,
			equity        : '0',
			companyHandle : 'russo-gillespie-conrad',
			companyName   : 'Russo, Gillespie and Conrad'
		},
		{
			id            : 178,
			title         : 'Surveyor, building',
			salary        : 144000,
			equity        : '0.007',
			companyHandle : 'salas-group',
			companyName   : 'Salas Group'
		},
		{
			id            : 125,
			title         : 'Surveyor, building control',
			salary        : null,
			equity        : null,
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 131,
			title         : 'Surveyor, insurance',
			salary        : 130000,
			equity        : '0.009',
			companyHandle : 'martinez-daniels',
			companyName   : 'Martinez-Daniels'
		},
		{
			id            : 124,
			title         : 'Surveyor, insurance',
			salary        : null,
			equity        : '0.066',
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 83,
			title         : 'Surveyor, minerals',
			salary        : 98000,
			equity        : '0.037',
			companyHandle : 'carr-wells-jones',
			companyName   : 'Carr, Wells and Jones'
		},
		{
			id            : 191,
			title         : 'Surveyor, quantity',
			salary        : 72000,
			equity        : '0.071',
			companyHandle : 'mejia-scott-ryan',
			companyName   : 'Mejia, Scott and Ryan'
		},
		{
			id            : 22,
			title         : 'Surveyor, rural practice',
			salary        : 193000,
			equity        : '0',
			companyHandle : 'weber-hernandez',
			companyName   : 'Weber-Hernandez'
		},
		{
			id            : 41,
			title         : 'Teacher, music',
			salary        : 127000,
			equity        : null,
			companyHandle : 'ingram-ferguson-rubio',
			companyName   : 'Ingram, Ferguson and Rubio'
		},
		{
			id            : 45,
			title         : 'Teacher, secondary school',
			salary        : 127000,
			equity        : null,
			companyHandle : 'sellers-bryant',
			companyName   : 'Sellers-Bryant'
		},
		{
			id            : 24,
			title         : 'Technical brewer',
			salary        : 77000,
			equity        : '0',
			companyHandle : 'thomas-sons',
			companyName   : 'Thomas and Sons'
		},
		{
			id            : 7,
			title         : 'Technical brewer',
			salary        : 157000,
			equity        : '0',
			companyHandle : 'anderson-arias-morrow',
			companyName   : 'Anderson, Arias and Morrow'
		},
		{
			id            : 107,
			title         : 'Television production assistant',
			salary        : 99000,
			equity        : null,
			companyHandle : 'edwards-lee-reese',
			companyName   : 'Edwards, Lee and Reese'
		},
		{
			id            : 35,
			title         : 'Television production assistant',
			salary        : 125000,
			equity        : '0',
			companyHandle : 'logan-miller',
			companyName   : 'Logan-Miller'
		},
		{
			id            : 167,
			title         : 'Therapist, drama',
			salary        : 200000,
			equity        : '0.095',
			companyHandle : 'hall-mills',
			companyName   : 'Hall-Mills'
		},
		{
			id            : 115,
			title         : 'Therapist, music',
			salary        : 103000,
			equity        : '0.087',
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 44,
			title         : 'Therapist, occupational',
			salary        : 82000,
			equity        : null,
			companyHandle : 'mejia-scott-ryan',
			companyName   : 'Mejia, Scott and Ryan'
		},
		{
			id            : 20,
			title         : 'Tourist information centre manager',
			salary        : 88000,
			equity        : '0',
			companyHandle : 'foster-rice',
			companyName   : 'Foster-Rice'
		},
		{
			id            : 126,
			title         : 'Trade mark attorney',
			salary        : null,
			equity        : null,
			companyHandle : 'mueller-moore',
			companyName   : 'Mueller-Moore'
		},
		{
			id            : 68,
			title         : 'Transport planner',
			salary        : null,
			equity        : null,
			companyHandle : 'reynolds-greene',
			companyName   : 'Reynolds-Greene'
		},
		{
			id            : 93,
			title         : 'Transport planner',
			salary        : 123000,
			equity        : '0.091',
			companyHandle : 'hudson-inc',
			companyName   : 'Hudson Inc'
		},
		{
			id            : 56,
			title         : 'Tree surgeon',
			salary        : null,
			equity        : '0.001',
			companyHandle : 'hall-davis',
			companyName   : 'Hall-Davis'
		},
		{
			id            : 116,
			title         : 'Water engineer',
			salary        : null,
			equity        : '0.028',
			companyHandle : 'mejia-scott-ryan',
			companyName   : 'Mejia, Scott and Ryan'
		},
		{
			id            : 95,
			title         : 'Writer',
			salary        : 172000,
			equity        : '0.091',
			companyHandle : 'anderson-arias-morrow',
			companyName   : 'Anderson, Arias and Morrow'
		}
	]
};
