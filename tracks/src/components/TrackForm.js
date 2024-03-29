import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';

const TrackFrom = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName
    } = useContext(LocationContext);

    const [saveTrack] = useSaveTrack();

    return (
        <>
            <Spacer>
                <Input
                    value={name}
                    placeholder='Enter name'
                    onChangeText={changeName}
                />
            </Spacer>

            {recording ?

                <Spacer>
                    <Button
                        title="Stop"
                        onPress={stopRecording}
                    />
                </Spacer> :
                <Spacer>
                    <Button
                        title="Start Recording"
                        onPress={startRecording}
                    />
                </Spacer>}
            <Spacer>
                {
                    !recording && locations.length
                        ? <Button
                            title="Save Recording"
                            onPress={saveTrack}
                        />
                        : null
                }
            </Spacer>
        </>);
};

export default TrackFrom;