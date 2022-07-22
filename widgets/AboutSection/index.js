
// components
import Image from "next/image";

// data
import { about } from "../../data";

export const AboutSection = () => {
  // const theme = useTheme();
  return (
  <section>
    <section
      // bgColor={theme.color.secondary.value}
      id={about.id}
    >
      <div
        className="AboutSection__Wrapper"
      >
        <div
          width="100%"
        >
          <h6>{about.title}</h6>
        </div>
        
        <div
          // bgColor={theme.color.white}
          
        >
          <Image 
            src={about.image.src}
            alt={about.image.alt}
            width={about.image.width}
            height={about.image.height}
          />
        </div>

        <div
          
        >
          {about.description.map((paragraph, i, arr) => (
            <p
              key={paragraph.id}
              style={{
                // // color: i === arr.length - 1 ? theme.color.white : theme.color.black,
                width: "100%"
              }}
            >{paragraph.text}</p>
          ))}
        </div>
        
      </div>
    </section>
  </section>
  )
};