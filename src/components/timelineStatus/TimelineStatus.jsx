import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

function TimelineStatus({ data= []}) {

  const getColor = {
    healthy: "green",
    sick: "orange",
    critical: "red",
  }

  const parseDate = (dateString) => {
    const dateObject = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("es-ES", options).format(dateObject);
  }

  return (
      <Timeline className="w-[32rem] pt-10 font-montserrat">
        {data.map((status) => (
          <TimelineItem key={status.id}>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon color={getColor[status.status]} />
            <Typography variant="h6" className="leading-none font-semibold">
              {status.status} - {parseDate(status.date)}
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" className="font-normal text-gray-600">
              {status.description}
            </Typography>
          </TimelineBody>
        </TimelineItem>
        ))}
      </Timeline>
  );
}

export default TimelineStatus;