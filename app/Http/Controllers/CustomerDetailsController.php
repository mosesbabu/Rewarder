<?php

namespace App\Http\Controllers;
use App\Models\CustomerDetails;
use Illuminate\Http\Request;

class CustomerDetailsController extends Controller
{
    //
      /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = CUstomerDetails::all(['id','title','description']);
        return response()->json($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $customer_details =CustomerDetails::create($request->post());
        return response()->json([
            'message'=>'Category Created Successfully!!',
            'customer_details'=>$customer_details
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CUstomerDetails  $customer_details
     * @return \Illuminate\Http\Response
     */
    public function show(CustomerDetails $customer_details)
    {
        return response()->json($customer_details);
    }

 
   
}
