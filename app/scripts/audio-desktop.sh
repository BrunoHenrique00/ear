#!/bin/sh

# record system audio with sox

# script usage
usage ()
{
# if argument passed to function echo it
[ -z "${1}" ] || echo "! ${1}"
# display help
echo "\
# record system audio with sox

$(basename "$0") -o outfile.wav
-o outfile.wav :optional agument # if option not provided defaults to system-audio-date-time"
exit 2
}

# getopts check and validate options
while getopts ':o:h' opt
do
  case ${opt} in
     o) output="${OPTARG}";;
     h) usage;;
     \?) usage "${INVALID_OPT_ERR} ${OPTARG}" 1>&2;;
     :) usage "${INVALID_OPT_ERR} ${OPTARG} ${REQ_ARG_ERR}" 1>&2;;
  esac
done
shift $((OPTIND-1))

# get the default pulseaudio sink
default_sink=$(pactl info | awk -F': ' '/Default Sink/ {print $2}')

# append .monitor to the sink name to capture the audio
sink_monitor="${default_sink}.monitor"

# default output name
output_default="system-audio-$(date +"%Y-%m-%d-%H-%M-%S").wav"

# echo "${sink_monitor}"
# record the default sink monitor with sox, reduce volume to 0.99 so audio doesnt clip
# ffmpeg -f pulse -y -i "${sink_monitor}" -loglevel quiet -ac 1 -ar 16000 "${output:=${output_default}}"
sox -r 16k -b 16 -v 0.99 -t pulseaudio "${sink_monitor}" -t wav "${output:=${output_default}}"