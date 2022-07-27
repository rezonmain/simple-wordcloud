import { animate, motion } from 'framer-motion';
const SVG = ({ size }: { size: number }) => {
	const floating = {
		x: [0, 0.1, 0.4, 0.7, 1, 1.1, 1.4, 1.7, 1.4, 1.1, 0.7, 0.4, 0.1, 0],
		y: [
			0, 0.1, 0.2, 0.2, 0.5, 0.6, 0.9, 1.2, 1.3, 1.5, 1.7, 2, 1.7, 1.2, 0.9,
			0.5, 0.2, 0,
		],
	};
	const transition = {
		ease: 'easeInOut',
		repeat: Infinity,
	};
	return (
		<svg
			width='321'
			height='290'
			id='wc-svg'
			version='1.1'
			xmlns='http://www.w3.org/2000/svg'
			style={{ transform: `scale(${size / 321})`, position: 'relative' }}
		>
			<g transform='translate(165.36681,141.90164)'>
				<motion.text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '101.582px', fill: '#262626' }}
					id='text2'
					x='18.909632'
					y='-74.191521'
					animate={floating}
					transition={{
						...transition,
						duration: 5,
						repeatDelay: 2,
					}}
				>
					nice
				</motion.text>
				<motion.text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '89.5426px', fill: '#262626' }}
					id='text4'
					x='4.6129112'
					y='-0.45052755'
					animate={floating}
					transition={{
						...transition,
						duration: 3,
						repeatDelay: 3,
					}}
				>
					simple
				</motion.text>
				<motion.text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '77.5033px', fill: '#262626' }}
					id='text6'
					x='-34.514961'
					y='65.013412'
					animate={floating}
					transition={{
						...transition,
						duration: 6,
						repeatDelay: 0,
					}}
				>
					word
				</motion.text>
				<motion.text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '65.4639px', fill: '#262626' }}
					id='text8'
					x='-1.4067614'
					y='114.67571'
					animate={floating}
					transition={{
						...transition,
						duration: 4,
						repeatDelay: 0,
					}}
				>
					clouds
				</motion.text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '22.5738px', fill: '#cccccc' }}
					id='text10'
					x='76.096527'
					y='30.400293'
				>
					stars
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '16.5541px', fill: '#cccccc' }}
					id='text12'
					x='-60.851028'
					y='13.846195'
				>
					morning
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '16.5541px', fill: '#cccccc' }}
					id='text14'
					x='-48.059227'
					y='-52.370193'
				>
					look
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '15.8016px', fill: '#cccccc' }}
					id='text16'
					x='90.39325'
					y='15.351112'
				>
					asked
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '15.8016px', fill: '#cccccc' }}
					id='text18'
					x='1.603073'
					y='19.865868'
				>
					see
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '15.8016px', fill: '#cccccc' }}
					id='text20'
					x='80.611275'
					y='62.003574'
				>
					grown
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '15.8016px', fill: '#cccccc' }}
					id='text22'
					x='-90.949394'
					y='-55.380043'
				>
					yes
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '14.2967px', fill: '#cccccc' }}
					id='text24'
					x='-14.951027'
					y='76.300301'
				>
					down
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '12.7918px', fill: '#cccccc' }}
					id='text26'
					x='-77.405128'
					y='77.052757'
				>
					once
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '12.7918px', fill: '#cccccc' }}
					id='text28'
					x='-108.25596'
					y='74.042923'
				>
					say
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '12.7918px', fill: '#cccccc' }}
					id='text30'
					x='-11.941189'
					y='8.5789795'
				>
					men
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '12.0393px', fill: '#cccccc' }}
					id='text32'
					x='19.66209'
					y='74.79538'
				>
					ups
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '12.0393px', fill: '#cccccc' }}
					id='text34'
					x='42.235863'
					y='-17.757088'
				>
					life
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text36'
					x='113.71947'
					y='25.88554'
				>
					why
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text38'
					x='82.868652'
					y='40.934723'
				>
					back
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text40'
					x='79.858818'
					y='73.290459'
				>
					earth
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text42'
					x='-116.533'
					y='21.370785'
				>
					replied
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text44'
					x='109.95718'
					y='40.182262'
				>
					even
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text46'
					x='-91.701851'
					y='-71.934143'
				>
					anything
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text48'
					x='-16.455944'
					y='-53.122665'
				>
					water
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '10.5344px', fill: '#cccccc' }}
					id='text50'
					x='-36.772339'
					y='1.8068501'
				>
					oh
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text52'
					x='35.463734'
					y='123.70522'
				>
					always
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text54'
					x='36.21619'
					y='-52.370193'
				>
					night
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text56'
					x='14.394878'
					y='-62.152176'
				>
					want
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text58'
					x='53.522751'
					y='-64.409546'
				>
					added
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text60'
					x='15.147337'
					y='-49.360367'
				>
					ah
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text62'
					x='32.453896'
					y='-86.983315'
				>
					put
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text64'
					x='-91.701851'
					y='-85.478401'
				>
					hundred
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text66'
					x='106.19489'
					y='75.547836'
				>
					five
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text68'
					x='-109.00842'
					y='86.834724'
				>
					friend
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text70'
					x='-8.9313545'
					y='125.96259'
				>
					looked
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text72'
					x='93.403084'
					y='-54.627579'
				>
					went
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text74'
					x='-124.81005'
					y='10.836357'
				>
					small
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text76'
					x='-37.524796'
					y='-134.38824'
				>
					baobabs
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '9.78197px', fill: '#cccccc' }}
					id='text78'
					x='43.740784'
					y='-96.765297'
				>
					three
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text80'
					x='58.037506'
					y='40.934723'
				>
					old
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text82'
					x='-56.336273'
					y='21.370785'
				>
					saw
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text84'
					x='106.19489'
					y='83.072433'
				>
					great
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text86'
					x='39.226028'
					y='-32.05381'
				>
					six
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text88'
					x='-7.4264379'
					y='135.74457'
				>
					without
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text90'
					x='125.75882'
					y='-66.666924'
				>
					consequence
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text92'
					x='-21.723156'
					y='-65.162003'
				>
					desert
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text94'
					x='-50.316605'
					y='-65.162003'
				>
					last
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text96'
					x='85.12603'
					y='-88.488243'
				>
					took
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text98'
					x='102.43259'
					y='95.111778'
				>
					long
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text100'
					x='26.434223'
					y='134.99211'
				>
					think
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text102'
					x='-45.049393'
					y='124.45768'
				>
					flowers
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '8.27705px', fill: '#cccccc' }}
					id='text104'
					x='-83.424805'
					y='-99.775124'
				>
					snake
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text106'
					x='-122.55268'
					y='-53.122665'
				>
					people
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text108'
					x='-9.6838112'
					y='-23.776756'
				>
					live
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text110'
					x='57.285046'
					y='10.836357'
				>
					thing
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text112'
					x='-42.792015'
					y='135.74457'
				>
					beautiful
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text114'
					x='71.581772'
					y='124.45768'
				>
					order
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text116'
					x='21.167009'
					y='141.76424'
				>
					lamp
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text118'
					x='-41.287094'
					y='52.221607'
				>
					rose
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text120'
					x='-39.782173'
					y='43.944557'
				>
					true
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text122'
					x='57.285046'
					y='-50.865288'
				>
					boa
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text124'
					x='-132.33466'
					y='-17.004631'
				>
					need
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text126'
					x='27.186682'
					y='49.96423'
				>
					able
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text128'
					x='58.789963'
					y='133.4872'
				>
					matters
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text130'
					x='-8.9313545'
					y='-13.99479'
				>
					find
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text132'
					x='-81.167427'
					y='22.123245'
				>
					use
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text134'
					x='-102.98873'
					y='10.836357'
				>
					love
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text136'
					x='-46.554306'
					y='-82.468575'
				>
					place
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text138'
					x='-144.37399'
					y='-8.7275782'
				>
					important
				</text>
				<text
					textAnchor='middle'
					transform='scale(1.0363149,0.96495767)'
					fontFamily='Helvetica'
					strokeWidth='0.752459'
					style={{ fontSize: '7.52459px', fill: '#cccccc' }}
					id='text140'
					x='-120.2953'
					y='-63.657089'
				>
					heart
				</text>
			</g>
		</svg>
	);
};

export default SVG;
