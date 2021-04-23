import React from 'react';
import LinkButton from './LinkButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const WatchButton = React.forwardRef(({ data }: any, ref: any) => {
  const last = data.items.length - 1;
  const item = data.items[last];
  const { snippet = {} } = item;
  const { resourceId } = snippet;
  return (
    <div>
      <LinkButton
        href={{
          pathname: '/player/[id]',
          query: { id: `${resourceId.videoId}` },
        }}
        variant="contained"
        color="primary"
      >
        <PlayArrowIcon />
        Watch Now
      </LinkButton>
    </div>
  );
});

export default WatchButton;
