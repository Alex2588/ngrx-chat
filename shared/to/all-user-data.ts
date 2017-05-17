import { Participant } from '../models/Participant';
import { Thread } from '../models/Thread';
import { Message } from '../models/Message';

export interface AllUserData {
    participants: Participant[],
    treads: Thread[],
    messages: Message[]
}