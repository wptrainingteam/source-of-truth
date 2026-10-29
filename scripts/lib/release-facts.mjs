// Release facts stated in the post prose: release date and Gutenberg plugin version range.
export function parseReleaseFacts( text ) {
	const releaseDate = text.match( /scheduled for release on ([^.]+?)\./i )?.[ 1 ];
	const gutenbergRange = text.match( /Gutenberg plugin versions? ([\d.]*\d\s*[–-]\s*[\d.]*\d)/ )?.[ 1 ];
	return { ...( releaseDate && { releaseDate } ), ...( gutenbergRange && { gutenbergRange } ) };
}
