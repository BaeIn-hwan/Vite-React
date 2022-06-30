const Loading = () => {
  const devideText = (words: string): any => {
    const splitWord = words.split('');

    console.log(splitWord.length);

    return splitWord.map((word, index) => {
      return (
        <span
          className="loading__word"
          key={index}
          style={{
            animationDuration: `${splitWord.length * 0.15}s`,
            animationDelay: `.${index}s`,
          }}
        >
          {word}
        </span>
      );
    });
  };

  return (
    <div id="loading" className="loading">
      <p className="loading__wrapper">{devideText('Loading...')}</p>
    </div>
  );
};

export default Loading;
