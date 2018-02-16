'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const { flatten } = require('../helpers')

const Image = ({
  src,
  alt,
  handleClick,
  handleLoad,
  handleError,
  href,
  target,
  srcSet,
  sizes,
  data
}) => {
  const dataAttributes = flatten(data)
  const imageSizes = sizes || '100vw'
  if (href) {
    return (
      <a
        className='component-image'
        href={href}
        target={target}
        onClick={handleClick}
        {...dataAttributes}
      >
        <img
          src={src}
          srcSet={srcSet}
          alt={alt}
          sizes={imageSizes}
          onLoad={handleLoad}
          onError={handleError}
        />
      </a>
    )
  }
  return (
    <img
      className='component-image'
      src={src}
      srcSet={srcSet}
      alt={alt}
      sizes={imageSizes}
      onClick={handleClick}
      onLoad={handleLoad}
      onError={handleError}
      {...dataAttributes}
    />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
  handleLoad: PropTypes.func,
  handleError: PropTypes.func,
  href: PropTypes.string,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  srcSet: PropTypes.string,
  sizes: PropTypes.string,
  data: PropTypes.object
}

module.exports = Image
