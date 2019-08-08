import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import PageLayout from '../components/PageLayout';

export default function AboutPage() {
  const data = useStaticQuery(graphql`
    query {
      natThumb: file(relativePath: { eq: "nat.jpg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 134) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      karaThumb: file(relativePath: { eq: "kara.jpg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 134) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      jonThumb: file(relativePath: { eq: "jon.jpg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 134) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      bradThumb: file(relativePath: { eq: "brad.jpg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 134) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      sandryThumb: file(relativePath: { eq: "sandry.jpg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 134) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      susanThumb: file(relativePath: { eq: "susan.jpg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 134) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      jesseThumb: file(relativePath: { eq: "jesse.jpg" }) {
        publicURL
        childImageSharp {
          fluid(maxWidth: 134) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <PageLayout pageTitle="The Band">
      <div>
        <div className="musicians">
          <h2 className="text-right border-underhang">current lineup</h2>
          <div className="row">
            <div className="col-3">
              <a href={data.natThumb.publicURL}>
                <Img fluid={data.natThumb.childImageSharp.fluid} alt="Nat Budin" />
              </a>
            </div>
            <div className="col-9">
              <h4><strong>Nat Budin</strong> – Guitar, cello &amp; vocals</h4>
              <p>Nat was classically trained as a cellist, but promptly recovered from all that as soon as he picked up a guitar. &nbsp;He has previously performed in Klezmoratorium and <a href="http://crisiscenter.bandcamp.com">The Crisis Center</a>, and did audio engineering work on the album <a href="https://sassafrass.bandcamp.com/album/sundown-whispers-of-ragnarok"><em>Sundown</em></a> by <a href="http://www.sassafrassmusic.com">Sassafrass</a>.</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <a href={data.karaThumb.publicURL}>
                <Img fluid={data.karaThumb.childImageSharp.fluid} alt="Kara Hurvitz" />
              </a>
            </div>
            <div className="col-9">
              <h4><strong>Kara Hurvitz</strong> – Vocals</h4>
              <p>Kara is a singing lawyer, which is like being a singing telegram but people shoot at you less.  She joined Stranger Ways in 2015 to play the role of Echo in the Iron &amp; Rust album.  She previously performed with <a href="http://www.sassafrassmusic.com">Sassafrass</a>, directing the Boston branch and serving as recording manager for the Sundown album.</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <a href={data.jonThumb.publicURL}>
                <Img fluid={data.jonThumb.childImageSharp.fluid} alt="Jon Sagotsky" />
              </a>
            </div>
            <div className="col-9">
              <h4><strong>Jon Sagotsky</strong> – Bass &amp; guitar</h4>
              <p>Jon has no proper musical training, but does possess a modest collection of cheap and/or free guitars and an unhealthy obsession with Rush, which is almost as good.</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <a href={data.bradThumb.publicURL}>
                <Img fluid={data.bradThumb.childImageSharp.fluid} alt="Brad Smith" />
              </a>
            </div>
            <div className="col-9">
              <h4><strong>Brad Smith</strong> – Percussion &amp; vocals</h4>
              <p>Brad has been drumming and singing since high school. In addition to theater, larp, and other creative outlets, he is a principal voice actor and technical producer on the&nbsp;<a href="http://www.secondshiftpodcast.com">Second Shift</a> audio theater podcast.</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <a href={data.sandryThumb.publicURL}>
                <Img fluid={data.sandryThumb.childImageSharp.fluid} alt="Alexandria Wilkie" />
              </a>
            </div>
            <div className="col-9">
              <h4><strong>Alexandria Wilkie</strong> – Flute &amp; vocals</h4>
              <p>Alexandria is a classically trained flutist, who refuses to try music as a career, but keeps coming back to it in her off time. She has been seen in the wild making (and wearing) silly costumes, singing classical music, and walking across bridges in high winds.  She also performs with <a href="http://www.sassafrassmusic.com">Sassafrass</a>.</p>
            </div>
          </div>
          <h2 className="text-right border-underhang mt-4">strangers in repose</h2>
          <div className="row">
            <div className="col-3">
              <a href={data.susanThumb.publicURL}>
                <Img fluid={data.susanThumb.childImageSharp.fluid} alt="Susan Weiner" />
              </a>
            </div>
            <div className="col-9">
              <h4><strong>Susan Weiner</strong> – Band founder, composer, fiddle &amp; vocals</h4>
              <p>Susan was raised by wild folk musicians and has been making music practically since birth. &nbsp;She originally put together Stranger Ways in order to perform the many songs she’d written over the past couple decades. Susan moved to Iowa in mid-2011 for a post-graduate position, and currently performs with <a href="http://www.cheshiremoonband.com">Cheshire Moon</a> when she’s not collecting wasps on the open prairies.</p>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-3">
              <a href={data.jesseThumb.publicURL}>
                <Img fluid={data.jesseThumb.childImageSharp.fluid} alt="Susan Weiner" />
              </a>
            </div>
            <div className="col-9">
              <h4><strong>Jesse Cox</strong> – Lead vocals</h4>
              <p>Jesse Cox has been described as an "unstoppable force of singing" in this sentence. &nbsp;Having been raised on folk music, he soon graduated to musical theatre and has also frequently been sighted singing and cantoring in churches. Jesse was the lead vocalist in the original lineup of Stranger Ways. He left the band to pursue a nursing degree and to raise his first child.</p>
            </div>
          </div>
        </div>
        <p className="mt-4"><em>Photos of Nat, Brad, Alexandria, Jon and Jesse by Viktoriya Fuzaylova. Photo of Kara by Brian Chin.  Photo of Susan by Scott Lefton.</em></p>
      </div>
    </PageLayout>
  )
}
