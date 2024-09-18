import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { APPLICATION_API_END_POINT } from "@/utils/context";

const shortListingStatus = ["Accepted", "Rejected"];
const ApplicantsTable = () => {
    const {applicants} = useSelector((store)=> store.application);
    const statusHandler = async (status , id) => {
        try {
            const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${id}/update`,{status},{withCredentials:true});
            if (res.data.success) {
                toast.success(res.data.message);
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent applied users</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
          </TableHeader>
          <TableBody>
            {
                applicants && applicants?.applications?.map((item)=>(
                    <tr key={item}>
              <TableCell>{item?.applicant?.fullname}</TableCell>
              <TableCell>{item?.applicant?.email}</TableCell>
              <TableCell>{item?.applicant?.phoneNumber}</TableCell>
              <TableCell className="text-blue-800 cursor-pointer">
                {
                    item.applicant?.profile?.resume ?<a href={item?.applicant?.profile?.resume}>{item?.applicant?.profile?.resumeOriginalName}</a> : <span>NA</span>
                }
                
              </TableCell>
              <TableCell>{item?.createdAt.split("T")[0]}</TableCell>
              <TableCell className="text-right">
                <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal/>
                    </PopoverTrigger>
                  <PopoverContent className="w-32">
                  {shortListingStatus.map((status , index) => {
                  return (
                    <div onClick={()=>statusHandler(status,item?._id)} key={index} className="flex w-fit items-center my-2 cursor-pointer">
                      <span>{status}</span>
                    </div>
                  );
                })}
                  </PopoverContent>
                </Popover>
                
              </TableCell>
            </tr>
                ))
            }
            
          </TableBody>
        
      </Table>
    </div>
  );
};

export default ApplicantsTable;