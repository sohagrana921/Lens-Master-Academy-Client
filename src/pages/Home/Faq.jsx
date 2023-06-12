import { Accordion } from "flowbite-react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
const Faq = () => {
  return (
    <div className="my-container mb-10">
      <SectionTitle heading={"FAQ"}></SectionTitle>
      <div>
        <Accordion collapseAll={true} arrowIcon={HiOutlineArrowCircleDown}>
          <Accordion.Panel>
            <Accordion.Title>
              What are the prerequisites for enrolling in your photography
              courses?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Our photography courses are designed to cater to students of all
                levels, from beginners to advanced photographers. There are no
                specific prerequisites for most of our courses, except for a
                basic understanding of how to operate a digital camera. However,
                we do offer specialized courses for different skill levels to
                ensure a tailored learning experience.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              How do I access the course materials and lessons?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Once you enroll in our photography courses, you will receive a
                unique login to our online learning platform. This platform
                provides access to all the course materials, including video
                lessons, tutorials, assignments, and additional resources. You
                can log in anytime and study at your own pace, from anywhere
                with an internet connection.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>
              Are there any live interactions or mentorship opportunities with
              instructors?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Absolutely! We understand the importance of mentorship and
                personalized guidance in photography education. Along with the
                pre-recorded lessons, we offer live webinars, Q&A sessions, and
                group discussions where you can interact directly with our
                experienced instructors. This allows you to ask questions, seek
                feedback, and receive expert advice on your photography journey.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title>
              Can I receive a certificate upon completion of a course?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Yes, upon successful completion of a course, you will receive a
                digital certificate. Our certificates are recognized within the
                photography industry and can be a valuable addition to your
                portfolio or resume. The criteria for completion may vary
                depending on the course, including submitting assignments,
                passing quizzes, and actively participating in the learning
                community.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
