import React from 'react'
import { Layout } from '../components'
import { useQuery, gql } from '@apollo/client'
import TrackCard from '../containers/track-card'
import QueryResults from '../components/query-result'

const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        id
        name
        photo
      }
    }
  }
`
/**
 * Tacks Page is Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS)

  if (loading) return 'Loading...'
  if (error) return `ERROR! ${error.message}`

  // {JSON.stringify(data)}
  return (
    <Layout grid>
      <QueryResults error={error} loading={loading} data={data}>
      {data?.tracksForHome?.map((track) => {
        return <TrackCard key={track.id} track={track} />
      })}
    </QueryResults>
    </Layout>
  )
}

export default Tracks
