import { Dispatch, createContext, useContext } from 'react';
import demo from '../data';
import { Action } from '../reducer';
import { Cloud } from '../types';

// The context type
export type CloudContext = {
	cloud: Cloud;
	dispatch: Dispatch<Action>;
};

// Create the context with default values, export to access the provider
export const CloudContext = createContext<CloudContext>({
	cloud: demo[0],
	dispatch: () => {},
});

// export the hook to access the context values
export const useCloudContext = () => useContext(CloudContext);
