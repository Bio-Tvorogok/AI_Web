import * as React from 'react';
import { ErrorMsgProps } from './types';

function ErrorMsg({ msg }: ErrorMsgProps) {
    return (
        <p
            id="outlined_error_help"
            className="absolute text-xs text-red-600 dark:text-red-400">
            {msg}
        </p>
    );
}

export default ErrorMsg;
