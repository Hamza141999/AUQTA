import React from "react";
import classes from "./projectTimelineSection.module.css";
import timeline from "../../../../public/assets/timeline.png";
import Image from "next/image";

function ProjectTimelineSection({ project }) {
  const baseS3Url = "https://auqta-bucket.s3.ap-southeast-1.amazonaws.com/";

  return (
    <div className={classes.container}>
      <div className={classes.content_container}>
        <h1 style={{ marginBottom: "60px" }}>PROJECT TIMELINE</h1>
        <div className={classes.timeline_section}>
          <div className={classes.startTimeSection}>
            <p>
              {project?.projectStartDate ? project?.projectStartDate : "N/A"}
            </p>
          </div>
          <div className={classes.endTimeSection}>
            <p>{project?.projectEndDate ? project?.projectEndDate : "N/A"}</p>
          </div>
          <div className={classes.firstMilestoneSection}>
            <img
              src={baseS3Url + project?.firstMilestone?.image}
              style={{ height: "100%" }}
            />
          </div>
          <div className={classes.secondMilestoneSection}>
            <img
              src={baseS3Url + project?.secondMilestone?.image}
              style={{ height: "100%" }}
            />
          </div>
          <div className={classes.thirdMilestoneSection}>
            <img
              src={baseS3Url + project?.thirdMilestone?.image}
              style={{ height: "100%" }}
            />
          </div>

          <Image src={timeline} className={classes.timeline_img} />
        </div>
      </div>
    </div>
  );
}

export default ProjectTimelineSection;
