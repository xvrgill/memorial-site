import React from 'react'
import EulogyParagraph from '../components/EulogyParagraph'

const EulogyPage = () => {

  const path1 = 'https://memorial-site-data.s3.amazonaws.com/memorial-images/Doc_Sisters-v2.png'
  const alt1 = 'Eugene and Sisters'
  const paragraph1 = 'Dr. Eugene Alexander Petersen, fondly known as Doc, was born on February 3, 1949 to James and Evadney Petersen in Frederiksted, St. Croix, Virgin Islands. He attended St. Patrick’s kindergarten and elementary school, then Claude O. Markoe Junior High School, and was a member of the first graduating class of St. Croix Central High School in 1968. Developing a love for horses and other animals at an early age spurred him to work summer jobs at Crago Animal Clinic while in high school and then pursuing higher education at Tuskegee Institute (University), where he studied veterinary medicine, thus becoming the first Virgin Islander to earn a Doctor of Veterinary Medicine Degree (DVM) in 1975.'

  return (
    <div>
      <EulogyParagraph imagePath={path1} alt={alt1} paragraphText={paragraph1} />
      <div className="eulogy-paragraph-container" style={{ padding: '0 10%', marginTop:'0'}}>
        <p>
          After completing an internship in Boston, Doc Petersen returned to St. Croix, where he first worked with the Department of Agriculture, then was recruited by the venerable Dr. Crago of Crago Animal Clinic in LaGrande Princesse. He eventually assumed ownership of the clinic, practiced for 25 years, and established himself as a kind and compassionate doctor, going above and beyond for his patients.
        </p>
        <p>
          Doc Petersen was an avid horse-racing enthusiast who owned, trained and raced horses for many years on St. Croix. He also managed the Randall “Doc” James Racetrack as the President and CEO of the Virgin Islands Racing Corporation, where he was instrumental in introducing simulcasting and account wagering to the Virgin Islands.
        </p>
        <p>
          Being multi-talented in music and entertaining, Doc began singing as a teenager. He then learned to play the guitar, and taught others – even prisoners at the Correctional Facility – how to play the guitar. He excelled in the cultural music of the Caribbean, especially calypso, but was also a balladeer who sang various genres of songs. He traveled worldwide as a solo artist and with small groups. Right up to his passing, he  was still performing as a solo artist in clubs, restaurants, and sunset boat rides on St. Croix, or at major events such as carnivals and festivals.
        </p>
        <p>
          Doc was an actor and also a recording artist that has written and produced four music albums and several musical plays for the theater. He was an author, who wrote “TanTan Tales and TanTan Tails”, a delightful memoir of growing up Crucian. He was elected as one of thirty distinguished delegates to the Virgin Islands’ Fifth Constitutional Convention. He has served on many boards, such as the V.I. Veterinary Board, The Frederiksted Economic Development Board, WTJX Public Television; and his most passionate, Island Center for the Performing Arts, where he also served as Executive Director for 9 years. He was an integral part of the production of Sunset Jazz, Wednesday Evening in the Park, Blue Bay Jazz Festival, and The Virgin
          Islands Cultural Exposé and Extravaganza. In 2020, he was bestowed an honorary degree at UVI’s 56th Annual Commencement for his many contributions to the people of the Virgin Islands.
        </p>
        <p>A pillar in the Virgin Islands community and cultural icon, Dr. Petersen was also a popular talk show and music show host on St. Croix, where his topics ranged from current events and cultural preservation to political discussions, while featuring the classical calypso music of the 1930s thru the 1980s.
        </p>
        <p>
          Doc’s love for his family, his hometown of Frederiksted, and his island home was spread everywhere he went...because he lived a full life. And if you close your eyes and listen carefully, you will hear his hearty laugh and reflect on the precious memories he left in each of our hearts to cherish along the way.
        </p>
      </div>
    </div>
  )
}

export default EulogyPage