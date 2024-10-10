class AudioProcessor extends AudioWorkletProcessor {
    process(inputs, outputs, parameters) {
        const input = inputs[0];

        
        return true;
    }
}

registerProcessor('audio-processor', AudioProcessor);