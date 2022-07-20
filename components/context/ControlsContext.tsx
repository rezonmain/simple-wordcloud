import { ChangeEvent, createContext, useState } from 'react';
import Layout, { LayoutConfig } from '../../lib/Layout';

export interface ControlsContext {
	config: LayoutConfig;
	onChange?: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const ControlsContext = createContext<ControlsContext>({
	config: Layout.DEFAULT,
});

const ControlsProvider = ({ children }: { children: JSX.Element }) => {
	const [config, setConfig] = useState(Layout.DEFAULT);

	const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, type, value } = e.target;
		const { checked } = e.target as HTMLInputElement;
		setConfig((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	return (
		<ControlsContext.Provider value={{ config, onChange }}>
			{children}
		</ControlsContext.Provider>
	);
};

export default ControlsProvider;
