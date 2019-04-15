const bucket = 'https://s3.amazonaws.com/jxnblk/skullcat2019/'

export const files = [
  '1984-a.mp3',
  '1984-b.mp3',
  '1984-c.mp3',
  '2016-a.mp3',
  '2016-b.mp3',
  '2016-c.mp3',
  '2016-d.mp3',
  '2016-e.mp3',
  '2016-f.mp3',
  '2016-g.mp3',
  '2016-h.mp3',
  '2048-a.mp3',
  '2048-b.mp3',
  '2048-c.mp3',
  '2048-d.mp3',
  'spectral.mp3',
  'drums-1984-a.mp3',
  'drums-1984-b.mp3',
  'drums-1984-c.mp3',
  'drums-2016-a.mp3',
  'drums-2016-b.mp3',
  'drums-2016-c.mp3',
  'drums-2016-d.mp3',
  'drums-2016-e.mp3',
  'drums-2016-f.mp3',
  'drums-2016-g.mp3',
  'drums-2048-a.mp3',
  'drums-2048-b.mp3',
  'drums-2048-c.mp3',
  'drums-2048-d.mp3',
]

const basename = filename => filename.split('.')[0]

export const loops = files.reduce((acc, filename) => ({
  ...acc,
  [basename(filename)]: bucket + filename,
}), {})
