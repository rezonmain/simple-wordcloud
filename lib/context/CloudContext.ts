import { Dispatch, createContext, useContext } from 'react';
import { demoClouds } from '../data';
import { Action } from '../reducer';
import { Cloud } from '../types';

// The context type
export type CloudContext = {
	cloud: Cloud;
	dispatch: Dispatch<Action>;
};

// Create the context with default values, export to access the provider
export const CloudContext = createContext<CloudContext>({
	cloud: demoClouds[0],
	dispatch: () => {},
});

// Export the hook to access context values
export const useCloudContext = () => useContext(CloudContext);
