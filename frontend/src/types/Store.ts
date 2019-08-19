import { Store as S } from 'redux';
import State from './State';


export default interface Store extends S<State> { };
