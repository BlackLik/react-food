import PropTypes from 'prop-types';

function OpenGraph(props) {
  return (
    <>
      <meta property='og:title' content={props.title} />
      <meta property='og:type' content='website' />
      <meta property='og:url' content={props.url} />
      <meta property='og:image' content={props.image} />
      <meta property='og:description' content={props.description} />
      <meta property='og:site_name' content={props.siteName} />
      <meta property='og:locale' content={props.locale} />
      <meta property='og:locale:alternate' content={props.localeAlternate} />
    </>
  );
}

OpenGraph.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  locale: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  siteName: PropTypes.string,
  localeAlternate: PropTypes.string,
};

export default OpenGraph;
